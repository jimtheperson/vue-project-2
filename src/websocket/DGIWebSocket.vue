<template>
  <button @click="requestJSON">requestJSON</button>
  <button @click="requestJSONByID">requestJSONByID</button>
  <button @click="createNewJSON">createNewJSON</button>
  <button @click="updateJSON">updateJSON</button>
  <button @click="deleteJSON">deleteJSON</button>
</template>

<script setup lang="ts">
// import { ref } from 'vue'

// const eventsFromServer = ref([])
const serverUrl = `ws://localhost:8080`
const socket = new WebSocket(serverUrl)

//Listen to socket open
socket.addEventListener('open', (event) => {
  console.log('Socket opened: ', event)
})
//Listen to socket message
socket.addEventListener('message', function (event) {
  console.log('Message from server ', event.data)
  // eventsFromServer.value.push({ time: new Date(), data: event.data });
})
//Listen to socket close
socket.addEventListener('close', function (event) {
  console.log('Socket closed: ', event)
})
//Listen to socket error
socket.addEventListener('error', function (event) {
  console.log('Socket error', event)
})

//Using: https://github.com/cherryApp/json-socket-server
//Request data for all users
const requestJSON = () => {
  socket.send(JSON.stringify({ type: 'read', path: 'users' }))
}
//request data for specific user
const requestJSONByID = () => {
  socket.send(JSON.stringify({ type: 'read', path: 'users', id: 1 }))
}
//Create new document
const createNewJSON = () => {
  socket.send(
    JSON.stringify({
      type: 'create',
      path: 'users',
      data: {
        name: 'Paco Rabanne',
        email: 'paco@example.com'
      }
    })
  )
}
//Update a document
const updateJSON = () => {
  socket.send(
    JSON.stringify({
      type: 'update',
      path: 'users',
      id: 5,
      data: {
        id: 5,
        name: 'Josh',
        age: 20
      }
    })
  )
}
//Delete a document
const deleteJSON = () => {
  socket.send(JSON.stringify({ type: 'delete', path: 'users', id: 9 }))
}
</script>
