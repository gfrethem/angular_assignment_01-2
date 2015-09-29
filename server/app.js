/**
 * Created by gfrethem on 9/28/15.
 */
var express = require('express');
var app = express();
var dems = require('./public/assets/data/D.json');
var reps = require('./public/assets/data/R.json');

app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
    response.sendFile(__dirname + '/public/assets/views/index.html');
});

app.get('/getDems', function(request, response) {
    response.send(dems);
});

app.get('/getReps', function(request, response) {
    response.send(reps);
});

var server = app.listen(3000, function() {
    var port = server.address().port;
    console.log('Listening on port: ', port);
});

module.exports = app;