// Handling mouse click:
document.querySelectorAll("button").forEach(element => {
    element.addEventListener("click", function () {
        var buttonInnerHtml = this.innerHTML;
        playSound(buttonInnerHtml);
        animateButton(buttonInnerHtml);
    });
});

// Handling keyboard press:
document.addEventListener("keydown", function(event) {
    var keypressed = event['key'].toUpperCase();
    try {
        playSound(keypressed);
        animateButton(keypressed);
    }
    catch (err){

    }
});

// Function to handle the keypress:

function playSound(property) {
    switch (property) {
        case "W":
            var tom1 = new Audio("sounds\\tom-1.mp3");
            tom1.play();
        break;

        case "A":
            var tom2 = new Audio("sounds\\tom-2.mp3");
            tom2.play();
        break;

        case "S":
            var tom3 = new Audio("sounds\\tom-3.mp3");
            tom3.play();
        break;

        case "D":
            var tom4 = new Audio("sounds\\tom-4.mp3");
            tom4.play();
        break;

        case "J":
            var snare = new Audio("sounds\\snare.mp3");
            snare.play();
        break;

        case "K":
            var crash = new Audio("sounds\\crash.mp3");
            crash.play();
        break;

        case "L":
            var kickBass = new Audio("sounds\\kick-bass.mp3");
            kickBass.play();
        break;
    
        default:
            // console.log("No button");
            break;
    }
}

function animateButton(event) {
    var element = document.querySelector('.'+event.toLowerCase());
    if (element !== null) {
        element.classList.add('pressed');
        setTimeout(function() {
            element.classList.remove('pressed');
        }, 100);
    }
}