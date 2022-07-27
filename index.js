// random number generator for dice1
let randomNumber1 = Math.floor((Math.random() * 6) + 1);

// random number generator for dice2
let randomNumber2 = Math.floor((Math.random() * 6) + 1);

// change img based on random number generator for first dice image
let randomImg1 = "images/dice"+ randomNumber1 +".png";

// change img based on random number generator for 2nd dice image
let randomImg2 = "images/dice"+ randomNumber2 +".png";

// select first dice img and change img src 
document.querySelector(`.dice .img1`).setAttribute(`src`, randomImg1);

// select second dice img and change img src
document.querySelector(`.dice .img2`).setAttribute(`src`, randomImg2);

// changes title to display the winner
if (randomNumber1 > randomNumber2) {
    document.querySelector(`h1`).textContent = "🚩 Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector(`h1`).textContent = "Player 2 Wins! 🚩";
} else {
    document.querySelector(`h1`).textContent = "Draw!";
};