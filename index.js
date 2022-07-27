// random number generator
let randomNumber1 = Math.floor((Math.random() * 6) + 1);

// change img based on random number generator for first dice image
let randomImg = "images/dice"+ randomNumber1 +".png";

// select first dice img and change img src 
document.querySelector(`.dice .img1`).setAttribute(`src`, randomImg);

// select second dice img and change img src
document.querySelector(`.dice .img2`).setAttribute(`src`, randomImg);

