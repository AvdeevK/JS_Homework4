'use strict'

let items = ['Phone','TV','Comeputer','Notebook','Chair'];
let prices = [50000, 25000, 45000, 60000, 3000];


let pricelist = []

function Goods (title, price) {
    this.title = title;
    this.price = price;
}


for (let i = 0; i < items.length; i++){
    pricelist.push(new Goods(items[i], prices[i]));
}

console.log(pricelist)

function basketPrice(list){
    let counter = 0;
    for (let j = 0; j < list.length; j++){
        counter += list[j].price;
    }
    return counter;
}

console.log(basketPrice(pricelist));