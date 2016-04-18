var colors = require('colors');

var args = process.argv.slice(2);
if(args.length == 0) {
    console.log('Первый параметр задает сообщение для вывода, второй - цвет. Доступные цвета: black, red, green, yellow, blue, magenta, cyan, white ,gray, grey'.green);
} else {
    if(!args[0] || !args[1]) {
        console.log('Небходимо два параметра!'.red);
    } else {
        var arrColors = ['black', 'red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'white', 'gray', 'grey'];

        var arrCheck = arrColors.filter(function(value) {
            return value == args[1];
        });

        if(arrCheck.length > 0) {
            console.log(args[0][args[1]]);
        } else {
            console.log('Цвет не поддерживается!'.red);
        }
    }
}



