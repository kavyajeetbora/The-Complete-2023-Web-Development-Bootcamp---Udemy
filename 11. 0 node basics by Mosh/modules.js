// path - inbuilt node module
// This module gives information about the paths of objects like baselocation, filepaths etc

const path = require('path');

var pathObject = path.parse(__filename);
// console.log(typeof(pathObject));
// console.log(pathObject);

// OS Module - Get the information about the current operating system
const os = require('os');

// Template string 
// ES6 / ES2015 : ECMAScript 6
// console.log(os.cpus());
// console.log(os.version());
console.log(`Total Memory: ${Math.floor(os.totalmem()/Math.pow(1024,3))} GB`);
console.log(`Free Memory: ${Math.floor(os.freemem()/Math.pow(1024,3))} GB`);