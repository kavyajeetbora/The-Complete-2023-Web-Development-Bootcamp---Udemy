const express = require('express');
const bodyParser = require('body-parser');
var PORT = 3000;

app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){
    res.sendFile(__dirname+"\\bmiCalculator.html");
});

app.post("/", function(req, res){
    var height = req.body['height'];
    var weight = req.body['weight'];
    var bmi = weight / Math.sqrt(height/100);

    res.send("Your BMI index is: "+bmi);

});

app.listen(PORT, function() {
    console.log("Application running at PORT: "+PORT)
});

