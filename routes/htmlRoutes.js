//this imports the Router module from the Express framework. 
const router = require('express').Router();
// THis imports the Node.js 'path' module and provides functions to work with file and directory paths
const path = require('path');

//this takes the 'app' object as a parameter and is an instance of the Express application
module.exports = (app) => {
  // Route to notes page
  app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
  });

  // Route to homepage.
  // This defines a catch-all route with the HTTP GET method and matches any URL path that is not matched by previous routes. 
  app.get('*', (req, res) => {
    //This sends the 'index.html' files as the response for the unmatched route. 
    //It is a fallback so that it is still sent when no others match. 
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });
};
