// Introduction to objects in javascript:

var housekeeper = {
    name: "Kavyajeet",
    yearsOfExperience: 8,
    languages : ['Assamese', 'English', "Hindi"]
}

var housekeeper2 = {
    name: "Arpita",
    yearsOfExperience: 3,
    languages : ['Assamese', 'English', "Hindi"]
}


console.log(housekeeper.name);

console.log(housekeeper2.name);

// Instead we can create constructor functions to create new objects:
// Constructor functions:

function HouseKeeper(name, yearsOfExperience, languages) {
    this.name = name;
    this.yearsOfExperience = yearsOfExperience;
    this.languages = languages;
    this.clean = function () {
        console.log("Cleaning in progress.")
    }
}

var housekeeper = new HouseKeeper("Kavyajeet", 12, ["Assamese", "Hindi", "English"]);
var housekeeper = new HouseKeeper("Arpita", 12, ["Assamese", "Hindi", "English"]);