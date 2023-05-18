import { computed, ref, onMounted } from 'vue'
import { defineStore } from 'pinia'

export const useWebsocketStore = defineStore('websocket', () => {
  const host = ref('localhost')
  const port = ref('')
  const websocketAlert = ref(true)
  const websocketConnected = ref(false)
  const urlFullPath = ref(computed(() => `ws://${host.value}:${port.value}`))
  let websocket: WebSocket

  onMounted(() => {
    websocketConnect()
  })
  function websocketConnect() {
    if (websocketConnected.value) {
      websocket.close()
    } else if (host.value && port.value) {
      websocket = new WebSocket(urlFullPath.value)
      websocketListen()
    } else {
      console.log('Please enter a host and port before connecting!')
    }
  }
  function websocketListen() {
    //Listen to socket open
    websocket.addEventListener('open', (event) => {
      console.log('Socket opened: ', event)
      websocketAlert.value = false
      websocketRequestJSON()
      setTimeout(() => (websocketConnected.value = true), 2000)
    })
    // Listen to socket message
    websocket.addEventListener('message', function (event) {
      console.log('Message from server ', event.data)
      // eventsFromServer.value.push({ time: new Date(), data: event.data });
    })
    //Listen to socket close
    websocket.addEventListener('close', function (event) {
      console.log('Socket closed: ', event)
      websocketAlert.value = true
      websocketConnected.value = false
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
    host,
    port,
    websocketAlert,
    websocketConnected,
    websocketConnect,
    websocketCreateNewJSON,
    websocketRequestJSON,
    websocketUpdateJSON,
    websocketDeleteJSON,
    websocketReceivedUpdate,
    websocketConnectError
  }
})
