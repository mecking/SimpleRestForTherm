/* jshint node: true */
'use strict';

var fs = require('fs');

var Temperature = function() {
	this.read = function(cb) {
		fs.readFile('/sys/bus/w1/devices/28-000005583a7b/w1_slave', function(err, data) {
			if (err) throw err;
			var data_temp = data.toString();
			var temperature = data_temp.split('t=');
			cb(temperature[1] / 1000);
		});
	};
};

exports.Temperature = Temperature;