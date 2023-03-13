const EventEmitter = require('events');
const emitter = new EventEmitter();

// Register a listener
emitter.on("messageLogged", function(eventArg) {
    console.log('Listener called');
    console.log(eventArg);
});

// Register a listener
emitter.on("messageLogged", (eventArg) => {
    console.log('Listener called using ES6 syntax');
    console.log(eventArg);
});

// emit an event
emitter.emit("messageLogged", {id:1, url: "https:\\"});