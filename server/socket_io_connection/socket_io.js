'use strict';

function socketIo(http) {
  const io = require('socket.io')(http);

  io.on('connection', function(socket) {
    console.log('a user connected');

    socket.emit('message', function() {
      console.log('request')
    }); // emit an event to the socket


    io.emit('broadcast', ); // emit an event to all connected sockets


    socket.on('reply', function() {
      console.log('reply')
    }); // listen to the event


    socket.on('disconnect', function() {
      console.log('user disconnected');
    }); //disconnect event
  });
}


module.exports = socketIo;
