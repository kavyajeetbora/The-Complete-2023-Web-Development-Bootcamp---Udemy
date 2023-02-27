const express = require('express');

const app = express();

/// Routes using node

app.get("/", function(request, response){
    response.send("<h1>Hello</h1>");
});

app.get("/contact", function(req, res) {
    res.send("Connect me on linkedin.com");
});

app.get("/about", function(req, res) {
    res.send("We provide web development courses to the users. Nodemon is installed now");
});

app.listen(3000, function() {
    console.log("server started");
});