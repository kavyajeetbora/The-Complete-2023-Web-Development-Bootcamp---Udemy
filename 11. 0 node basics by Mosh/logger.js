var url = "http://mywebsite.com/log";

function log(message){
    // log the message and send it to the website
    console.log(message);
}
// module.exports = log;
module.exports.log = log;
module.exports.endPoint = url; 