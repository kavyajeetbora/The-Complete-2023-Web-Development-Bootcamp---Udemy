const Logger = require("./logger.js");
const logger = new Logger();

// Register a listener on the event
logger.on('messageLogged', (eventArg)=>{
    console.log("Listener called", eventArg);
});

logger.log("This is a message");
