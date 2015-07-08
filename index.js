'use strict';
var osxScreensaver = require('osx-screensaver');
var winScreensaver = require('win-screensaver');

module.exports = function (cb) {
	if (process.platform === 'darwin') {
		osxScreensaver(function (err) {
			if (err) {
				cb(err)
				return;
			}

			cb();
		});

		return;
	} else if (process.platform === 'win32') {
		winScreensaver(function (err) {
			if (err) {
				cb(err)
				return;
			}

			cb();
		});

		return;
	}

	throw new Error('Only OS X and Windows systems are supported');
};
