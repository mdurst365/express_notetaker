//What dependencies will be needed?

// need express to interact with the front end
const express = require("express");
// need path for filename paths
const path = require("path");
// need fs to read and write to files
const fs = require("fs");

// creating an express server
const app = express();
// get the port to listen
const PORT = process.env.PORT || 7000;

//  Initialize notesData

let notesData = [];

// Set up body parsing, static, and route middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "Develop/public")));


// routes

// api call response for all the notes, and sends the results to the browser as an array of object

app.get("/api/notes", function(err, res) {
  try {
    // reads the notes from json file
    notesData = fs.readFileSync("./Develop/db/db.json", "utf8");
    console.log("Still listening, and I read the notes");
    // JSON.parse to convert notesData into an array of objects
    notesData = JSON.parse(notesData);

    // handle errors
  } catch (err) {
    console.log("\n error (in app.get.catch):");
    console.log(err);
  }
  //   send objects to the browser
  res.json(notesData);
});
