const logger = require('./logger.js');
console.log(logger);
logger.log("This is the message to be logged");

function sayHello(name) {
    console.log(name);
}

sayHello("Kavyajeet"); 

// console.log(module);

console.log(__filename);
console.log(__dirname);