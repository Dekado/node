// Example of readline module usage
var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.write('Please, enter a command!\n');

rl.on('line', function(cmd) {
  console.log('"' + cmd + '"? Muhaha!');
  
  this.close(); // close the input handling
});
