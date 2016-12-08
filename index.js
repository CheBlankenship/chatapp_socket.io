const express = require('express');
const app = require("express")();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use(express.static('public'));

app.get('/', function(req,res){
  res.sendFile('index.html');
});

io.on('connection', function() {
  console.log('a user connected');
});

http.listen(3000, function(){
  console.log("listening on *3000");
});
