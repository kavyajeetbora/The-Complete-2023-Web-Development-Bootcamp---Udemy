const express = require('express');
const app = express(); // This returns an Express application object

// This application object have several usefull methods such as:
// get, post, put, delete

const courses = [
    {id: 1, name: "course1"},
    {id: 2, name: "course2"},
    {id: 3, name: "course3"}
];

app.get('/', (req, res) => {
    res.send("Hello");
    res.end();
});

app.get('/api/courses', (req, res) => {
    res.send(JSON.stringify([1,2,3]));
});

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

app.get('/api/post/:year/:month', (req,res) => {
    res.send(req.query);
});

const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
});
