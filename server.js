
	

var gameport        = process.env.PORT || 8080;


var	express  		= require('express'),
    app				= express(),
    http 			= require('http'),
    server 			= http.createServer(app),
    io 				= require('socket.io').listen(server); //Create a socket.io instance using our express server


var UUID            = require('node-uuid'),
    verbose         = false;





server.listen(gameport);

console.log('\t :: Express :: Listening on port ' + gameport );

//By default, we forward the / path to index.html automatically.
app.get( '/', function( req, res ){ 
    res.sendfile( __dirname + '/simplest.html' );
});


//This handler will listen for requests on /*, any file from the root of our server.
//See expressjs documentation for more info on routing. 
app.get( '/*' , function( req, res, next ) {
    //This is the current file they have requested
    var file = req.params[0]; 
    //For debugging, we can track what files are requested.
    console.log('\t :: Express :: file requested : ' + file);
    //Send the requesting client the file.
    res.sendfile( __dirname + '/' + file );
}); //app.get *




//Configure the socket.io connection settings. 
//See http://socket.io/
io.configure(function (){

    io.set('log level', 0);

    io.set('authorization', function (handshakeData, callback) {
      callback(null, true); // error first callback style 
    });

});
 
//Socket.io will call this function when a client connects, 
//So we can send that client a unique ID we use so we can 
//maintain the list of players.
io.sockets.on('connection', function (client) {
    
        //Generate a new UUID, looks something like 
        //5b2ca132-64bd-4513-99da-90e838ca47d1
        //and store this on their socket/connection
    client.userid = UUID();

        //tell the player they connected, giving them their id
    client.emit('onconnected', { id: client.userid } );

        //Useful to know when someone connects
    console.log('\t socket.io:: player ' + client.userid + ' connected');
    
        //When this client disconnects
    client.on('disconnect', function () {

            //Useful to know when someone disconnects
        console.log('\t socket.io:: client disconnected ' + client.userid );

    }); //client.on disconnect
 
}); //io.sockets.on connection






/* UDP Code
var PORT = 33333,
	HOST = '127.0.0.1';

var dgram 		= require('dgram');

server.on('listening', function () {
    var address = server.address();
    console.log('UDP Server listening on ' + address.address + ":" + address.port);
});

server.on('message', function (message, remote) {
    console.log(remote.address + ':' + remote.port +' - ' + message);

});

server.bind(PORT, HOST);
*/
