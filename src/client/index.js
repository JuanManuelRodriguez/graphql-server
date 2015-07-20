require('babel/register');

var debug = require('debug');
debug.enable('client*');

require('./mutation');
require('./query');
