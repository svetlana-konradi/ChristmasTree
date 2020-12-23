"use strict";

let products = [
    {
        title: 'Christmas tree white',
        image: '//img/white_tree.jpg',
        price: '25 $',
        oldprice: '45 $',
        description: 'Artificial spruce white 180cm'
    },
    {
        title: 'Christmas tree violet',
        image: '//img/violet_tree.jpg',
        price: '30 $',
        oldprice: '60 $',
        description: 'Artificial spruce violet 180cm'
    },
    {
        title: 'Christmas tree green',
        image: '//img/green_tree.jpg',
        price: '20 $',
        oldprice: '45 $',
        description: 'Artificial spruce green 180cm'
    },
    {
        title: 'Little christmas tree',
        image: '//img/little_green_tree.jpg',
        price: '15 $',
        oldprice: '25 $',
        description: 'Artificial spruce white 180cm'
    }
];

let firstCard = document.getElementsByClassName(".first-card");
let secondCard = document.getElementsByClassName(".second-card");
let thirdCard = document.getElementsByClassName(".third-card");
let fourthCard = document.getElementsByClassName(".fourth-card");

let cardTitle = document.getElementsByClassName(".title");
let cardImage = document.getElementsByClassName(".product-image");
let cardPrice = document.getElementsByClassName(".product-price");
let cardOldPrice = document.getElementsByClassName(".product-oldprice");
let cardDescription = document.getElementsByClassName(".product-description");

function addDescriptionToCard(products) {
    for (elem in products) {
        cardTitle.textContent = products[elem].title;
        cardImage.innerHTML = products[elem].image; //inner?
        cardPrice.textContent = products[elem].price;
        cardOldPrice.textContent = products[elem].oldprice;
        cardDescription = products[elem].description;
    }
}


