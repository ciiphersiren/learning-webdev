var randomNumber1 = Math.floor((Math.random() * 6) + 1); // 1 - 6
var randomNumber2 = Math.floor((Math.random() * 6) + 1); // 1 - 6

var randomDice1 = "dice" + randomNumber1 + ".png"; //dice - 1
var randomDice2 = "dice" + randomNumber2 + ".png"; //dice - 2

var randomImageSource1 = "images/" + randomDice1;
var randomImageSource2 = "images/" + randomDice2;

document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if (randomNumber1 != randomNumber2) {
    if(randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "Player 1 Wins!";
        document.querySelectorAll("p")[0].innerHTML = "👑 player 1";
    } else {
        document.querySelector("h1").innerHTML = "Player 2 Wins!";
        document.querySelectorAll("p")[1].innerHTML = "👑 player 2";
    }
} else {
    document.querySelector("h1").innerHTML = "🏳️ Draw! 🏳️";
    document.querySelectorAll("p")[0].innerHTML = "player 1";
    document.querySelectorAll("p")[1].innerHTML = "player 2";
}

document.querySelector(".roll").addEventListener("click", function(event) {
    location.reload();
});