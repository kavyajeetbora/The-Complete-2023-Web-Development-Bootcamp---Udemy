const EventEmitter = require('events');
class Logger extends EventEmitter {
    url = "https:\\www.google.com";
    log (message) {
        console.log(message);
        this.emit('messageLogged', {id:1, url:this.url, message: message});
    }
}

module.exports = Logger;