const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req,res) {
    res.sendFile(__dirname + "\\signup.html");
});

app.post("/", function(req, res){
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var email = req.body.email;


    // Convert the user input data to js object as the API we are using only accepts JSON object file
    var data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    }

    // Convert the above js object to json object
    var jsonData = JSON.stringify(data);

    const url = "https://us21.api.mailchimp.com/3.0/lists/a44e3b6b54";
    const options = {
        method: "POST",
        auth: "kavyajeet:453c8fe59e27831f27fc8c8df14037b5-us21"
    }
    const request = https.request(url, options, function (response){

        if (response.statusCode===200) {
            res.sendFile(__dirname + "\\success.html");
        }
        else {
            res.sendFile(__dirname + "\\failure.html");
        }

        
        response.on('data', function(data){
            // console.log(JSON.parse(data));
        });

        
    });

    // request.write(jsonData);
    request.end();
});

app.listen(3000, function(){
    console.log("The application is running on the server");
});



// List ID
// a44e3b6b54

// APi key
// 453c8fe59e27831f27fc8c8df14037b5-us21