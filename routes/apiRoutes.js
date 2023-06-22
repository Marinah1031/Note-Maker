//The router module from the Express framework is imported.
const router = require('express').Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid'); // Using the `uuid` package to generate unique IDs

const notesData = require('../db/db.json');


  // GET route to retrieve all saved notes
  router.get('/notes', (req, res) => {
    // console.log(notesData);
    res.json(notesData);
  });

  // POST route to save a new note
  router.post('/notes', (req, res) => {
    const newNote = req.body;
    newNote.id = uuidv4(); // Generate a unique ID for the new note
//This extracts the data from the request body and assignes it to the newNote
    notesData.push(newNote);
    console.log(notesData);
    //this updates the notesData arraw to the db.json file and converts the array to a JSON string.
    fs.writeFile('./db/db.json',
    // Uses JSON.stringify() before writing it to the file. 
      JSON.stringify(notesData),
      (err) => {
        if (err) throw err;
        console.log('Note saved successfully!');
        res.json(newNote);
      }
    );
  });
  //Exporting the router instance makes it available for use in other files. 
  module.exports = router
