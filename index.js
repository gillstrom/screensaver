'use strict';

if (process.platform === 'darwin') {
	module.exports = require('osx-screensaver');
} else if (process.platform === 'win32') {
	module.exports = require('win-screensaver');
} else {
	module.exports = require('xdg-screensaver');
}
