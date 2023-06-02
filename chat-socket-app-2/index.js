const path = require('path');
const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const { generateMsg } = require('./utilities');
const app = express();
const server = http.createServer(app);
const io = socketio(server);

const port = process.env.PORT || 8080;
const publicDir = path.join(__dirname, './public');

app.use(express.static(publicDir));

io.on('connection', socket => {
    console.log('New websocket connection');
    socket.emit('message', generateMsg('Welcome to the chat app'));
    socket.broadcast.emit('message', generateMsg('A new user has joined'));

    socket.on('sendMessage', (message, callback) => {
        io.emit('message', generateMsg(message))
        callback()
    })

    socket.on('disconnect', () => {
        io.emit('message', generateMsg('A user has left'))
    })
})

server.listen(port, () => console.log(`Server is up on port ${port}`));