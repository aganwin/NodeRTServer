
//var io = require('socket.io');
var x = require('socket.io')
var socket = io.connect('http://localhost/');
//Now we can listen for that event
io.socket.on('onconnected', function( data ) {

	//Note that the data is the object we sent from the server, as is. So we can assume its id exists. 
	console.log( 'Connected successfully to the socket.io server. My server side ID is ' + data.id );
});



/* UDP Code
//The third parameter message.length, is the number of bytes we want to send from the offset in the buffer. In our case, the offset is 0, and the length is message.length (16 bytes), which is quite tiny and the whole buffer can be sent in a single UDP packet.
var PORT = 33333;
var HOST = '127.0.0.1';

var dgram = require('dgram');

var message = new Buffer('My KungFu is Good!');

var client = dgram.createSocket('udp4');

client.send(message, 0, message.length, PORT, HOST, function(err, bytes) {
    //Exceeding the allowed packet size will not result in any error. The packet will be silently dropped. That's just the nature of UDP.
    if (err) throw err;
    console.log('UDP message sent to ' + HOST +':'+ PORT);
    client.close();
});*/