let dice1 = document.getElementById("dice-1");
let dice2 = document.getElementById("dice-2");

function thayDoi() {
    dice1.src = "./img/dice" + (Math.floor(Math.random() * 6) + 1) + ".png";
    dice2.src = "./img/dice" + (Math.floor(Math.random() * 6) + 1) + ".png";
};