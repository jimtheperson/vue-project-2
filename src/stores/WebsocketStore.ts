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
  const _urlFullPath = ref(computed(() => `ws://${_host.value}:${_port.value}`))
  let websocket: WebSocket

  onMounted(() => {
    websocketConnect()
  })
  function websocketConnect() {
    if (_websocketConnected.value) {
      websocket.close()
    } else if (_host.value && _port.value) {
      websocket = new WebSocket(_urlFullPath.value)
      websocketListen()
    } else {
      console.log('Please enter a host and port before connecting!')
    }
  }
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
      // eventsFromServer.value.push({ time: new Date(), data: event.data });
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
  function websocketCreateNewJSON(message: String) {}
  function websocketRequestJSON() {
    websocket.send(JSON.stringify({ type: 'read', path: 'users' }))
  }
  //request data for specific user
  const websocketRequestJSONByID = (path: String, id: Number) => {
    websocket.send(JSON.stringify({ type: 'read', path: path, id: id }))
  }
  // function websocketRequestJSON(path: String, id?: Number) {
  //   if (id) {
  //     DGIWebsocket().requestJSONByID( path, id)
  //   } else {
  //     DGIWebsocket().requestJSON( path )
  //   }
  // }
  function websocketUpdateJSON(message: String) {}
  function websocketDeleteJSON(path: String, id?: Number) {}
  function websocketReceivedUpdate() {}
  function websocketConnectError() {}

  return {
    _host,
    _port,
    _websocketConnected,
    websocketConnect,
    websocketCreateNewJSON,
    websocketRequestJSON,
    websocketUpdateJSON,
    websocketDeleteJSON,
    websocketReceivedUpdate,
    websocketConnectError
  }
})
