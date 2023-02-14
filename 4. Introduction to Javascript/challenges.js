function getMilk(money) {   
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    console.log("Bought "+Math.floor(money/1.5)+" bottles of milk.");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
  }


function lifeInWeeks(age) {

/************Don't change the code above************/    
    
    //Write your code here.
    var years_left = 90-age;
    var x = Math.floor(years_left/365);
    var y = Math.floor(years_left/52);
    var z = Math.floor(years_left/12);
    

    console.log("You have "+x+" days, "+y+" weeks, "+z+" months left.");
    
    
/*************Don't change the code below**********/
}

// BMI calculator:
function bmiCalculator(weight, height){
  // weight in kgs and height in meters
  var bmi = weight/Math.pow(height,2);
  return bmi
}