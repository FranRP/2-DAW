// var express = require('express');
// var app = express();
//
// app.get('/', function (req, res) {
//     res.send('Hello World!');
// });
//
// app.listen(3000, function () {
//     console.log('Example app listening on port 3000!');
// });
//
// app.get('/fran', function (req, res) {
//     res.send('Nodemon es la caña, pero WebStorm me ha impresionado más');
// });


var express = require('express');
var path = require('path');
var app = express();

// Define the port to run on
app.set('port', 3000);

app.use(express.static(path.join(__dirname, 'public')));

// Listen for requests
var server = app.listen(app.get('port'), function () {
    var port = server.address().port;
    console.log('Magic happens on port ' + port);
});