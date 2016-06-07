var app = require('express')();
var http = require('http').Server(app);
var socketIo = require('socket.io')(http);

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/index.html');
});

socketIo.on('connection', function(socket) {
  console.log('A user is connected!!');
  socket.on('disconnect', function() {
    console.log('a user disconnected :(');
  });
  socket.on('chat message', function(msg) {
    socketIo.emit('chat message', msg);
  });
});

http.listen(3000, function() {
  console.log('listening on port 3000');
});