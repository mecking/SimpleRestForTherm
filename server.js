/* jshint node: true */
'use strict';

var sensor = require('./temperature.js'),
	temperature = new sensor.Temperature(),
	restify = require('restify');

var server = restify.createServer({
	name: 'myAPI',
	version: '0.0.1'
});

var os = require('os');

server.get('/sensor', function(req, res, next) {
	temperature.read(function(data) {
		if (data) {
			res.send({
				temperature: data
			});
			//res.next();
		}
	});
});

server.listen(3000, function() {
	console.log('Listening on port 80');
});