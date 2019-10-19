//variables 
//for crystals

var crystal = {
    blue:
    {
       name: "Blue",
        value: 0
    },
    yellow:
    {
        name: "yellow",
        value: 0
    },
    red:
    {
        name: "Red",
        value: 0
    },
    purple:
    {
        name: "Purple",
        value: 0
    }
}

//score
var currentScore = 0;
var targetScore = 0;

var winCount = 0;
var lossCount = 0;


//functions

var getRandom = function(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var startGame = function() {

    var currentScore = 0;
    targetScore = getRandom(19, 120);

    crystal.red.value = getRandom(1, 12);
    crystal.blue.value = getRandom(1, 12);
    crystal.yellow.value = getRandom(1, 12);
    crystal.purple.value = getRandom(1, 12);

    //score.html- jQuery- get class
    $("#yourScore").html(currentScore);

   
    $("#targetScore").html(targetScore);


    //test
console.log("target score" + targetScore);
console.log("Red: " + crystal.red.value + " | Blue: " + crystal.blue.value + " |Yellow: "  + crystal.yellow.value + " |Purple " + crystal.purple.value);

}

var values= function(crystal) {
    currentScore = currentScore + crystal.value;
     //-----------------Could not get score to change in html-------//
     // had YourScore in HTML// changed to yourScore
    $("#yourScore").html(currentScore);
//-----------------------------------------------------------//
console.log("Your score: " + currentScore);

    if(currentScore > targetScore) {
    alert("Loser!")
    console.log("You lost");

    lossCount++;

    $("#lossCount").html(lossCount);

    startGame();
    
}
    else if(currentScore === targetScore) {
        alert("Whoop Whoop YOU WIN!!")
        console.log("You get sprinkles");

        winCount++

        $("#winCount").html(winCount);

        startGame();
    }

}



//processes {}
// $("#blue").click(function() {
// })

startGame();

document.getElementById("red").onclick = function() {
    values(crystal.blue);
}
document.getElementById("blue").onclick = function() {
    values(crystal.blue);
}
document.getElementById("yellow").onclick = function() {
    values(crystal.yellow);
}
document.getElementById("purple").onclick = function() {
    values(crystal.purple);
}