/*var PORT = 33333,
	HOST = '127.0.0.1';*/

var gameport    = process.env.PORT || 4004;

var dgram 		= require('dgram'),
	io 			= require('socket.io'),
	express 	= require('express'),
	UUID 		= require('node-uuid');

var app         = express.createServer();



var server = dgram.createSocket('udp4');





server.on('listening', function () {
    var address = server.address();
    console.log('UDP Server listening on ' + address.address + ":" + address.port);
});

server.on('message', function (message, remote) {
    console.log(remote.address + ':' + remote.port +' - ' + message);

});

//server.bind(PORT, HOST);
