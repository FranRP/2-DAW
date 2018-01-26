// // var express = require('express');
// // var app = express();
// //
// // app.get('/', function (req, res) {
// //     res.send('Hello World!');
// // });
// //
// // app.listen(3000, function () {
// //     console.log('Example app listening on port 3000!');
// // });
// //
// // app.get('/fran', function (req, res) {
// //     res.send('Nodemon es la caña, pero WebStorm me ha impresionado más');
// // });
//
//
// var express = require('express');
// var path = require('path');
// var app = express();
//
// // Define the port to run on
// app.set('port', 3000);
//
// app.use(express.static(path.join(__dirname, 'public')));
//
// // Listen for requests
// var server = app.listen(app.get('port'), function () {
//     var port = server.address().port;
//     console.log('Magic happens on port ' + port);
// });
//
// //Prueba socket
// var io = require('socket.io')(server);
//
// // app.get('/',function(req,res) {
// //     res.sendFile(__dirname + '/index.html');
// // });
//
// io.on('connection', function (socket) {
//     console.log('usuario conectado');
//     socket.on('disconnect', function () {
//         console.log('usuario desconectado');
//     });
//     socket.on('nuevoUsuario', function (msg) {
//         socket.broadcast.emit("nuevoUsuario");
//         console.log('Se ha conectado el usuario: ' + msg);
//     });
//     socket.on('new user', function (msg) {
//         socket.broadcast.emit("new user");
//         console.log("Se ha conectado el usuario: ")
//     });
// });

var express = require('express');
var path = require('path');
var app = express();

// Define the port to run on
app.set('port', 3000);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    res.send('Hello World!');
});


// Listen for requests
var server = app.listen(app.get('port'), function () {
    var port = server.address().port;
    console.log('Magic happens on port ' + port);
});


var io = require('socket.io')(server);


io.on('connection', function (socket) {
    console.log('a user connected');
    socket.on('chat message', function (msg) {
        socket.broadcast.emit('chat message', msg);
    });
    socket.on('chat message', function (msg) {
        socket.emit('chat message', msg);
    });
    socket.on('disconnect', function () {
        console.log('user disconnected');
    });
    socket.on('new user', function (msg) {
        socket.broadcast.emit("new user");
        console.log("Se ha conectado el usuario: ")
    });

});