const fs = require('fs');

var files = fs.readdirSync('./');
console.log(files);

var files = fs.readdir('./', function(err, files){
    if (err) {
        console.log(err);
    }
    else {
        console.log(`Results: ${files}`);
    }
});