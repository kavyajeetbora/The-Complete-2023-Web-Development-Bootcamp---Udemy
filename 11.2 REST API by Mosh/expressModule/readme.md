## Why use express ?

To connect to the various routes that user makes, for that we have code for each route with an if-else statement as shown:

```javascript
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url==="/") {
        res.write("Hello");
        res.end();
    }

    if (req.url == "/api/courses") {
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
});

server.listen(3000);
```

This can be very cumbersome as we may have a lot of routes in our web application. 

Express framework makes this task easier. The syntax will be:

```javascript
//Import express module
const express = require('express');
const app = express(); 

app.get('/', (req, res) => {
    res.send("Hello");
    res.end();
});

app.get('/api/courses', (req, res) => {
    res.send(JSON.stringify([1,2,3]));
});

app.listen(3000, ()=>{
    console.log("Listening on port 3000");
});
```

In this implementation, we don't have if-else blocks. 

# Enironment variables

While hard-coding the port number for our application may work in the development enviroment but it may not work in the production environment because when we deploy the application the port number is dynamically assigned to the application by the server and we cannot rely on a particular environment to be available

Best practice is to read the enviroment variable port first and assign it to the application:
```javascript
const port = process.env.PORT || 3000;
```

