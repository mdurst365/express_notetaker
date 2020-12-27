# Unit 11 Express Homework: Note Taker

This app is a homework assignment that was created for the OSU full-stack coding bootcamp.

## Description

This application uses express.js backend to save and retrieve note data from a JSON file. The assignment is to create an application that can be used to write, save, and delete notes. 

## Task List
- [x] Application should allow users to create and save notes.
- [x] Application should allow users to view previously saved notes.
- [x] Application should allow users to delete previously saved notes.

## Further Requirements

* The following HTML routes should be created:

  * GET `/notes` - Should return the `notes.html` file.
  
---add screenshot here
  
  * GET `*` - Should return the `index.html` file
  
  ---add screenshot here

* The application should have a `db.json` file on the backend that will be used to store and retrieve notes using the `fs` module.

* The following API routes should be created:

  * GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.

  * POST `/api/notes` - Should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.

  * DELETE `/api/notes/:id` - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.

## Deploying the App

This app has been deployed on Heroku and is viewable here: https://express-notetaker1.herokuapp.com/notes

## Submission on BCS

You are required to submit the following:

* The URL of the deployed application. This should be the link to the url provided by Heroku. Be sure not to submit a link to the Heroku dashboard.

* The URL of the GitHub repository
