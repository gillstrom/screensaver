'use strict';
var test = require('ava');
var screensaver = require('./');

test('Start screensaver', function (t) {
	t.plan(1);

	screensaver(function (err) {
		t.assert(!err, err);
	});
});
