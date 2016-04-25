var fs = require('fs');
var argv = require('minimist')(process.argv.slice(2));

if(!argv.path) {
    console.error('Путь к логу должен быть вида - "--path=log"');
    return false;
}
fs.readFile(argv.path, function(err, data) {
    if(err) {
        throw err;
    }

    var arrGames = data.toString().trim().split('\n');
    console.log('Всего игр сыграно: ', arrGames.length);
    var quantityWins = 0;
    var quantityLoses = 0;
    var quantityEagle = 0;
    var quantityTail = 0;
    var queueWins = [];
    var checkQueueWins = 0;
    var queueLoses = [];
    var checkQueueLoses = 0;


    arrGames.forEach(function(value) {
        value = value.split(';');
        value.forEach(function(subValue, index) {
            subValue = parseInt(subValue);
            if(index == 0) {
                quantityEagle = quantityEagle + subValue;
            }
            if(index == 1) {
                quantityTail = quantityTail + subValue;
            }
            if(index == 2) {
                quantityWins = quantityWins + subValue;
                //Считаем победы подряд
                if((checkQueueWins == 0 && subValue != 0) || (checkQueueWins != 0 && subValue != 0)) {
                    checkQueueWins += subValue;
                    queueWins.push(checkQueueWins);
                } else if(subValue == 0) {
                    checkQueueWins = 0;
                }
            }
            if(index == 3) {
                quantityLoses = quantityLoses + subValue;
                //Считаем поражения подряд
                if((checkQueueLoses == 0 && subValue != 0) || (checkQueueLoses != 0 && subValue != 0)) {
                    checkQueueLoses += subValue;
                    queueLoses.push(checkQueueLoses);
                } else if(subValue == 0) {
                    checkQueueLoses = 0;
                }
            }
        });
    });

    console.log('Количество выйгрышей: ' + quantityWins + '. ' + Math.round(quantityWins/arrGames.length*100) + '% выйгрышей.');
    console.log('Количество поражений: ', quantityLoses + '. ' + Math.round(quantityLoses/arrGames.length*100) + '% поражений.');
    console.log('Орел выпадал: ', quantityEagle);
    console.log('Решка выпала: ', quantityTail);
    console.log('Побед подряд: ', Math.max.apply(null, queueWins));
    console.log('Поражений подряд: ', Math.max.apply(null, queueLoses));

});