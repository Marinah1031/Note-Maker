const router = require('express').Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid'); // Using the `uuid` package to generate unique IDs

const notesData = require('../db/db.json');

module.exports = (app) => {
  // GET route to retrieve all saved notes
  app.get('/api/notes', (req, res) => {
    res.json(notesData);
  });

  // POST route to save a new note
  app.post('/api/notes', (req, res) => {
    const newNote = req.body;
    newNote.id = uuidv4(); // Generate a unique ID for the new note

    notesData.push(newNote);
    fs.writeFile(
      path.join(__dirname, '../db/db.json'),
      JSON.stringify(notesData),
      (err) => {
        if (err) throw err;
        console.log('Note saved successfully!');
        res.json(newNote);
      }
    );
  });
};
