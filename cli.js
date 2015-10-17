#!/usr/bin/env node
'use strict';
var meow = require('meow');
var screensaver = require('./');

meow([
	'Usage',
	'  $ screensaver'
]);

screensaver(function (err) {
	if (err) {
		console.error(err.message);
		process.exit(1);
	}
});
