dice_elements = document.querySelectorAll(".fa-9x")

dice_numbers = ['one', 'two', 'three', 'four', 'five', 'six'];
results = []

for (var i=0; i<dice_elements.length; i++) {
    //set the attribute
    dice_i = Math.floor(Math.random()*6)
    dice_roll = dice_numbers[dice_i];
    
    dice_elements[i].setAttribute('class', 'fa-solid fa-dice-'+dice_roll+' fa-9x');
    results.push(dice_i);
}

result = document.querySelector(".heading");
if (results[0]>results[1]) {
    result.innerHTML = "🚩 Player 1 Wins";
} 
else if (results[0]<results[1]) {
    result.innerHTML = "Player 2 Wins 🚩";
}
else{
    result.innerHTML = '🏳️ Its a draw 🏳️';
}