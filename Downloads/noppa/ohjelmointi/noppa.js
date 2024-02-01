'use strict';

function Nopanheitto() {
    const getrandomnumber = Math.floor(Math.random() * 6) + 1;

    const kuva = document.getElementById('dice1').getElementsByTagName('img')[0];
    kuva.src = '../kuvat/' + getrandomnumber + '.png';
}