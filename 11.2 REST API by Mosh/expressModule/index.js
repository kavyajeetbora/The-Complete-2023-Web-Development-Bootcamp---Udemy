// modules
const express = require('express');
const { valid } = require('joi');
const Joi = require('joi');

const app = express(); // This returns an Express application object
app.use(express.json()); // to activate the parsing of json objects

// This application object have several usefull methods such as:
// get, post, put, delete

const courses = [
    {id: 1, name: "course1"},
    {id: 2, name: "course2"},
    {id: 3, name: "course3"}
];

// GET REQUEST FOR ALL ITEMS
app.get('/api/courses', (req, res) => {
    res.send(courses);
});

// GET REQUEST OF A PARTICULAR ID
app.get('/api/courses/:id', (req, res) => {
    // res.send(req.params.id);
    const course = courses.find(c => c.id === parseInt(req.params.id));

    if (!course) {
        res.status(404).send("Sorry the course is not available");
    }
    else {
        res.send(course);
    }

});

// GET REQUEST: get request with multiple parameters:
app.get('/api/post/:year/:month', (req,res) => {
    res.send(req.query);
});

// POST REQUEST IN NODE: to add data
app.post("/api/courses", (req, res) => {
    
    const {error, result} = validateCourse(req.body);
    if (error) {
        res.status(400).send(error.details[0].message);
        return;
    }
    
    const course = {
        id: courses.length + 1,
        // name: "course4" // -> we need to read this data from the body/params of the post request
        name: req.body.name // to make this work, we need to activate parsing of json objects which by default not activated
    }

    courses.push(course);
    res.send(course);
    // if (!req.body.name || req.body.name.length < 3) {
    //     res.status(400).send("Name of the course is required and should be of minimum 3 characters");
    //     return;
    // }
   
});

// UPDATE REQUEST IN NODE
app.put('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));

    if (!course) {
        res.status(404).send("Sorry the course is not available");
        return;
    }
    
    // validate the user input
    const {error} = validateCourse(req.body); // this is called objected destructuring, in here we get results.error object
    if (error) {
        res.status(400).send(error.details[0].message);
        return;
    } 

    // If valid input then update the course
    course.name = req.body.name;
    // report the client that the course was updated
    res.send(course); 
});


// DELETE REQUEST
app.delete('/api/courses/:id', (req,res)=>{
    // look for the course if exists
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) {
        res.status(404).send("Sorry the course is not available");
        return;
    }

    // delete the course
    const index = courses.indexOf(course);
    courses.splice(index, 1);
    // report the client that the course was deleted
    res.send(course);
});


const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
});

function validateCourse(input) {
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    });

    return schema.validate(input);
}
