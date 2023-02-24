// Global variables
var gameSequence;
var playerSequence;
var level;
var colors = ['green', 'red', 'yellow', 'blue'];
var stage = "newGame";

window.addEventListener("load", function(){
    loadGame();
});

$(document).keydown(function(){
    switch (stage) {
        case "newGame":
            startGame();
            break;
        default:
            break;
    }
});
    
$('button').click(function(event) {
    if (stage==='gameOn') {
    
        var color = event['currentTarget'].getAttribute('id');
    
        animateButton(color);   
        playSound(color);
        // Update player sequence:
        playerSequence.push(color);

        var validInputs = checkInput(); 

        // Check inputs when the sequence len == userSequence
        if (playerSequence.length===gameSequence.length && validInputs) {      
            console.log('Next Level');
            setTimeout(function() {nextLevel();}, 800);
        }

        if (!validInputs) {
            restartGame();
        }
        else {
            console.log("player",playerSequence);
            console.log("game",gameSequence);
        }
    }

    console.log(stage);
});

function checkInput() {
    var valid = true;
    for (var i=0; i<playerSequence.length; i++) {
        if(playerSequence[i]!==gameSequence[i]) {
            valid=false;
            break;
        }
    }
    return valid
}

function loadGame(){
    document.querySelector('h1').innerHTML = 'Welcome to Simon Game';

    $('p').removeClass('hidden');
    document.querySelector('p').innerHTML = 'Press any key to start the game !'
}

function startGame() {
    resetAll();
    stage = "gameOn";
    document.querySelector('h1').innerHTML = 'Level 1';
    $('p').addClass('hidden');
    nextLevel();
}

function nextLevel() {
    playerSequence = [];
    var randomColor = generateRandomColor();
    gameSequence.push(randomColor);
    animateButton(randomColor);
    playSound(randomColor);

    level++;
    document.querySelector('h1').innerHTML = 'Level '+level;
}

function generateRandomColor(){
    return colors[Math.floor(Math.random()*4)];
}

function animateButton(color){    

    $("#"+color).addClass('btn-highlight');

    setTimeout(function(){
        $("#"+color).removeClass('btn-highlight');
    }, 200);
}

function playSound(color) {
    var audio = new Audio('sounds/'+color+'.mp3');
    audio.play();
}

function restartGame() {

    resetAll();
    document.querySelector('h1').innerHTML="Game Over";
    setTimeout(function(){
        document.querySelector('h1').innerHTML="Press any key to restart";
        stage = "newGame";
    }, 2000);
}

function resetAll() {
    level = 0;
    gameSequence = [];
    playerSequence = [];
}





