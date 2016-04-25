// File work examples
var fs = require('fs');
var util = require('util');

var object = {1: 'dsfsdfds', 2: 'dasdada'};
console.dir(util.inspect(object));

// Get file info
fs.stat('./env.js', function (err, file) {
  if (err) 
    throw err;

  //console.log('file is: ', file);
  console.log('.isFile() is: ', file.isFile());

});

// Read our file
/*fs.readFile('./fileWorks.js', function (err, data) {
  if (err) 
    throw err;

  console.log('data is: ', data.toString());
});
*/
// Append data to test file
fs.appendFile('test-file.txt', 'Secret\n', function(err) {
  if (err) 
    throw err;
});

// Write to test file
/*
fs.writeFile('test-file.txt', 'tsss...', function(err) {
  if (err) 
    throw err;
});*/
