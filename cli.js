#!/usr/bin/env node
'use strict';
const meow = require('meow');
const screensaver = require('./');

meow(`
	Usage
	  $ screensaver
`);

screensaver();
