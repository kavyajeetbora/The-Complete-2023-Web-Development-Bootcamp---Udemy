const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function (req, res) {
    var index = __dirname + "\\index.html"
    res.sendFile(index);
});

app.post("/", function (req, res) {
    const query = req.body.cityName;
    const apiKey = "52a6ae494de914940857697e290bc185";
    const unit = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+ query +"&appid="+ apiKey +"&units="+unit;
    console.log(url);
    
    https.get(url, function(response){
        console.log(response.statusCode);

        response.on("data", function(data){
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const description = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            var imageLocation = "https://openweathermap.org/img/wn/"+icon+"@2x.png"
        
            res.write("<p>The weather is currently "+description+"</p>");
            res.write("<h1>The temperature in "+ query +" is "+temp+" C</h1>");
            res.write("<img src='"+imageLocation+"'/>")

            res.send();
        });   
    });

});

app.listen(3000, function (){
    console.log("Server is up and running");
});