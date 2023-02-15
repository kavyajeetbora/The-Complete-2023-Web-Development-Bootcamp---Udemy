var guestList = ["Angela", "Kavyajeet", "Mainak", "Arpita", "Debotri", "Isan", "Sreya", "Soumyodeep", "Sayantani"];

// Indexing in js list:
console.log(guestList[1]);

// includes function:
var name = prompt("What is your name ?")

if (guestList.includes(name)){
    console.log("Welcome to the party");
}else {
    console.log("Sorry you are not in the guest list");
}

// Insert item in arrays
var list = [1];
list.push(2);
list.push(3);

// Delete item from arryas
list.pop(3);

// Basic fizzBuzz function

var output = [];
var count = 1;

function fizzBuzz(){
    var value = count
    if (count%3===0 && count%5===0){
        output.push("FizzBuzz");
    }
    else if (count%3===0) {
        output.push("Fizz");
    }
    else if (count%5===0){
        output.push("Buzz");
    }
    else {
        output.push(count);
    }
    
    count++;
    
    console.log(output);
}


// Fiz buzz program
var output = [];
for (let index = 1; index < 101; index++) {

    if (index % 5 === 0 && index % 3 === 0) {
        output.push("FizzBuzz");
    } 
    else if (index % 3 === 0) {
        output.push("Fizz");
    }
    
    else if (index % 5 === 0) {
        output.push("Buzz");
    } 
    else {
        output.push(index);
    }
}

// Who's Buying lunch challenge:
var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
function whosPaying(names){
    var random_index = Math.floor((Math.random()*(names.length)));
    return names[random_index] + " is going to buy lunch today!";
}


