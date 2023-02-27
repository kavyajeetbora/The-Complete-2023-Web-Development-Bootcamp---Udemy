// Love calculator

var name1 = prompt("Name of the first person?");
var name2 = prompt("Name of the second person?");

function loveCalculator(name1, name2) {
    // generate a random number
    var match = Math.floor(Math.random()*100)+1;
    
    console.log(name1 + " ❤️ " + name2 + ":\n"+match+" %")
}

// Love calculator v2
var name1 = prompt("Name of the first person?");
var name2 = prompt("Name of the second person?");

function loveCalculator(name1, name2){
    // generate a random number
    var match = Math.floor(Math.random()*100);
    
    if (match>=70) {
        console.log(name1 + " ❤️ " + name2 + ":\n"+match+" %\nYour love score is high.");
    } if (match >= 30 && match <70) {
        console.log(name1 + " ❤️ " + name2 + ":\n"+match+" %\nYour love score is medium.");
    } if (match<30) {
        console.log(name1 + " ❤️ " + name2 + ":\n"+match+" %\nYour love score is low.");
    }
}

// BMI Calculator
function bmiCalculator (weight, height) {
    var bmi = weight/(height*height)
    var interpretation;

    if (bmi < 18.5) {
        interpretation = "Your BMI is "+bmi+", so you are underweight.";
    } if (bmi >= 18.5 && bmi < 24.9) {
        interpretation = "Your BMI is "+bmi+", so you have a normal weight.";
    } if (bmi >= 24.9) {
        interpretation = "Your BMI is "+bmi+", so you are overweight.";
    }

    return interpretation;
}

// Leap year challenge
function isLeap(year) {
    if (year % 4 === 0) {
        return 'Leap year.';
    } if (year % 100 ===0) {
        if (year % 400 === 0) {
            return 'Leap year.';
        } else {
            return 'Not leap year.';
        }
    } else {
        return 'Not leap year.';
    }
}