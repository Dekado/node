// Async examples
var async = require('async');
var fs = require('fs');

// File name for processing
var FILE_NAME = 'test-file.txt';

// Describe actions one by one
async.waterfall([

  function(callback) {
    // Take some information about file
    fs.stat(FILE_NAME, callback);
  },

  function(stat, callback) {
    console.log('is it file? ', stat.isFile());

    if ( !stat.isFile() )
      throw new Error;

    // Read our file
    fs.readFile(FILE_NAME, callback);
  },

  function(data, callback) {
    console.log('Data from a file: ', data.toString());

    // Append data to our file
    fs.appendFile(FILE_NAME, 'our sweety string\n', callback);
  }

], function (err, result) {
  if (err) 
    throw err;  
  
  console.log('all ok!');
});
