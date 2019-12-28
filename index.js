

var express = require('express');
var socket = require("socket.io");

//app set up
var app = express();
var server = app.listen(3000, function(){
    console.log('listening on :3000');
    });
app.use(express.static('public'));

//socket set up
var io = socket(server);

io.on('connection',function(socket){
  console.log("socket is made",socket.id)

  
  socket.on('chat',function(data){
    io.sockets.emit('chat',data);
  });

  socket.on('someoneclick',function(data){
    io.sockets.emit('someoneclick',data);
  });


})
