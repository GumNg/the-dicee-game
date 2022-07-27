let randomNumber1 = Math.floor((Math.random() * 6) + 1);

let images1 = "images/dice"+ randomNumber1 +".png";

document.querySelector(`.dice .img1`).setAttribute(`src`, images1);
