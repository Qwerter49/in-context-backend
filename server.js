const express = require('express');
const socketIO = require('socket.io');
const http = require('http')

const app = express()
const httpApp = http.createServer(app)
const io = socketIO(httpApp)

const PORT = process.env.PORT || 3000;


io.on('connection', (socket) => {
  console.log('Client connected');
  socket.on("message", message => {
      console.log("Someone sent a message!", message)
  })
  socket.on('disconnect', () => console.log('Client disconnected'));
});

setInterval(() => io.emit('time', new Date().toTimeString()), 1000);

httpApp.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})