var PORT = 33333,
	HOST = '127.0.0.1';


var dgram 		= require('dgram'),
	client 		= require('socket.io').listen(8080).sockets,
	UUID 		= require('node-uuid'),
	express 	= require('express');


var app 		= express();


const redis = require('redis');
const client = redis.createClient();




/*
server.on('listening', function () {
    var address = server.address();
    console.log('UDP Server listening on ' + address.address + ":" + address.port);
});

server.on('message', function (message, remote) {
    console.log(remote.address + ':' + remote.port +' - ' + message);

});

server.bind(PORT, HOST);*/
