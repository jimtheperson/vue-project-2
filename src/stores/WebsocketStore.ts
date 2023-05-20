import { computed, ref, onMounted } from 'vue'
import { defineStore } from 'pinia'
import { useAlertStore } from './AlertStore'
import type IDGIAlert from '@/interfaces/IDGIAlert'

export const useWebsocketStore = defineStore('websocket', () => {
  const _alertStore = useAlertStore()
  const _alertConnected: IDGIAlert = {
    id: 'websocketConnected',
    type: 'success',
    title: 'System Connected!',
    text: 'Please wait, this interface will automatically refresh...',
    closable: true
  }
  const _alertDisconnected: IDGIAlert = {
    id: 'websocketDisconnected',
    type: 'error',
    title: 'System Disconnected!',
    text: 'This interface has lost communication with the server. Please, ensure the correct host and port are defined, then try again.',
    closable: true
  }
  const _host = ref('localhost')
  const _port = ref('')
  const _websocketConnected = ref(false)
  const _websocketData = ref({})
  const _urlFullPath = ref(computed(() => `ws://${_host.value}:${_port.value}`))
  let websocket: WebSocket

  //Try initial connection.
  onMounted(() => {
    websocketConnect()
  })
  //Try connecting to a websocket at the stored _host and _port through the computed _urlFullPath reference.
  //If it is already connected, it will disconnect. The automatic retry call will try the connection at the new URL.
  function websocketConnect() {
    if (_websocketConnected.value) {
      try {
        websocket.close()
      } catch (error) {
        throw new Error('Error closing websocket: ' + websocket.url)
      }
    } else if (_host.value && _port.value) {
      try {
        websocket = new WebSocket(_urlFullPath.value)
        websocketListen()
      } catch (error) {
        throw new Error('Error opening websocket: ' + websocket.url)
      }
    } else {
      console.log('Please enter a host and port before connecting!')
    }
  }
  ///Event listeners are started after a successful websocket connection is made.
  //Events include: socket open, message from server, socket close, and socket error.
  function websocketListen() {
    //Listen to socket open
    websocket.addEventListener('open', (event) => {
      console.log('Socket opened: ', event)
      _alertStore.removeAlertByID('websocketDisconnected')
      _alertStore.pushAlert(_alertConnected)
      websocketRequestJSON()
      setTimeout(() => {
        _alertStore.removeAlertByID('websocketConnected')
        _websocketConnected.value = true
      }, 2000)
    })
    // Listen to socket message
    websocket.addEventListener('message', function (event) {
      console.log('Message from server ', event.data)
      _websocketData.value = event.data
    })
    //Listen to socket close
    websocket.addEventListener('close', function (event) {
      console.log('Socket closed: ', event)
      _websocketConnected.value = false
      _alertStore.removeAlertByID('websocketConnected')
      _alertStore.pushAlert(_alertDisconnected)
      websocketConnect()
    })
    //Listen to socket error
    websocket.addEventListener('error', function (event) {
      console.log('Socket error', event)
    })
  }
  //Add a new item to the server.
  // function websocketCreateNewJSON(message: string) {}
  //Request data from the server by path.
  function websocketRequestJSON() {
    websocket.send(JSON.stringify({ type: 'read', path: 'users' }))
  }
  // //Request data from the server by path and id.
  // function websocketRequestJSONByID(path: string, id: string | number) {
  //   websocket.send(JSON.stringify({ type: 'read', path: path, id: id }))
  // }
  // //Request data from the server by path and optional id.
  // function websocketRequestJSON(path: string, id?: string | number) {
  //   if (id) {
  //     DGIWebsocket().requestJSONByID(path, id)
  //   } else {
  //     DGIWebsocket().requestJSON(path)
  //   }
  // }
  // //Update the server with new data.
  // function websocketUpdateJSON(message: String) {}
  // //Delete data from the server.
  // function websocketDeleteJSON(path: string, id?: string | number) {}

  return {
    _host,
    _port,
    _websocketConnected,
    _websocketData,
    websocketConnect
  }
})
