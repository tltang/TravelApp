// Setup empty JS object to act as endpoint for all routes
projectData = {};

const dotenv = require('dotenv');
dotenv.config();

const bodyParser = require('body-parser');
const path = require('path')
const port = 8082;

// Require Express to run server and routes
const express = require('express');
const apiKey = process.env.API_KEY;

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('dist'))

console.log(__dirname)

// Setup Server
const server = app.listen(port, listening);

// designates what port the app will listen to for incoming requests
function listening(){
    console.log("server running");
    console.log(`running on localhost: ${port}`);
}

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'))
})

// GET Route I: Server Side
// There should be a GET route setup on the server side with the first argument as a string naming the route,
// and the second argument a callback function to return the JS object created at the top of server code.
app.get('/ProjData', GetData)

function GetData (req, res) {
    //console.log('in GetData');
    //console.log(projectData);
    res.send(projectData);
}

// POST Route
// The server side function should create a new entry in the apps endpoint
// (the named JS object) consisting of the data received from the client side POST.

app.post('/addHistory', addHistory )

function addHistory (req, res){
    newEntry = { temperature: req.body.temperature,
                 feeling: req.body.feeling,
                 date: req.body.date }
    Object.assign(projectData, newEntry);
    res.send(projectData);
    //projectData.push(newEntry);
    // console.log(req.body)
    //console.log(projectData)
}
