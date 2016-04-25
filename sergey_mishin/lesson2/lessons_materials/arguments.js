// process - the root object for node.js
//console.log('process object is: ', process);

// Let see how it in ordinary way
/*var args = process.argv;
console.log('args is: ', args);*/

// Let's use the mininist library
var args = require('minimist')(process.argv.slice(2));
console.log('args is: ', args);
