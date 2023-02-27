const fs = require('fs');
var superheroes = require('superheroes');
var supervillains = require('supervillains');

// Copy pasting files
fs.copyFileSync("file1.txt", "file2.txt")

// Using external package like superheroes and supervillains
console.log(superheroes.random() + " v/s "+supervillains.random());