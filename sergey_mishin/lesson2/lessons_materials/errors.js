// Error handling

// Uncaught exception processing
process.on('uncaughtException', function(err) {
  console.error('Are you kidding me??? This is a crazy error! : ', err);
});

// Dangerous block of code
try {
  x.let();
}

// Block error handling
catch(err) {
  console.error('err is: ', err);
}

// Cleaning, in any way
finally {
  console.log('Any way code...');
}
