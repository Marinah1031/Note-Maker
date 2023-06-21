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

    notesData.push(newNote);
    console.log(notesData);
    fs.writeFile('./db/db.json',
      JSON.stringify(notesData),
      (err) => {
        if (err) throw err;
        console.log('Note saved successfully!');
        res.json(newNote);
      }
    );
  });
  module.exports = router
