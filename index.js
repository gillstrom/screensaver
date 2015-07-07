'use strict';
var execFile = require('child_process').execFile;

module.exports = function (cb) {
	if (process.platform !== 'darwin') {
		throw new Error('Only OS X systems are supported');
	}

	var cmd = 'open';
	var args = [
		'-a',
		'ScreenSaverEngine'
	];

	execFile(cmd, args, function (err) {
		if (err) {
			cb(err);
			return;
		}

		cb();
	});
};
