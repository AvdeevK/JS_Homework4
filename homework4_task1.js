'use strict'

var x = 1000;

function Discharge (x=NaN) {
    this.hundreds = Math.floor(x/100);
    this.dozens = Math.floor(x/10)%10;
    this.units = x%10;
}

function displayConsist(x) {
    if (x > 999){
        console.log('Значение превышает 999');
        console.log(new Discharge());
    }

    else {
        var p = new Discharge(x);
        console.log(p);
    }
}

displayConsist(x);

//console.log(new Discharge(x))