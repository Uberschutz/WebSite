/*
** EPITECH INNOVATIVE PROJECT, 2018
** Überschutz
** File description:
** Backend
*/


var express = require('express');
var bodyParser = require('body-parser');
var path = require("path");
var app = express();

app.use(bodyParser.json()); // for parsing application/json

app.use(express.static(__dirname + '/template'));

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname+'/index.html'));
});

var port = 7171;
const hostname = '127.0.0.1';
var server = app.listen(port, function() {
	console.log('Server running at http://' + hostname + ':' + port + '/');
	const all_routes = require('express-list-endpoints');
	console.log(all_routes(app));
});