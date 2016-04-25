var readline = require('readline');
var fs = require('fs');
var async = require('async');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

var FILE_NAME = 'log';

rl.write('Орел или решка(Введите 1 или 2)?\n');

rl.on('line', function(input) {
    var check = Math.round(Math.random());
    if(input == 1 || input == 2) {
        if (input == check) {
            console.log('Угадал!');
            fs.appendFile('./log', '1;0;1;0\n', function(err) {
                if (err) {
                    throw err;
                }
            });
        } else {
            console.log('Не угадал! Ахахахаха!');
            fs.appendFile('./log', '0;1;0;1\n', function(err) {
                if (err) {
                    throw err;
                }
            });
        }

        this.close();
    } else {
        console.log('Введите 1 или 2!');
    }
});


