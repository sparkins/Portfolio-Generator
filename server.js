// Dependencies
const express = require("express");
const path = require("path");
const routes = require("./routes");
// var mongojs = require("mongojs");
const mongoose = require('mongoose');
var logger = require("morgan");
var bodyParser = require('body-parser');

const PORT = process.env.PORT || 3001;
const app = express();

// Set the app up with morgan
app.use(logger("dev"));

// set the app up with bodyparser
app.use(bodyParser());

// Database configuration
// var databaseUrl = process.env.MONGODB_URI || "portfoliogenerator_db";
// var collections = ["projects", "users"];

// Hook mongojs config to db variable
// var db = mongojs(databaseUrl , collections);

// Log any mongojs errors to console
// db.on("error", function(error) {
//   console.log("Database Error:", error);
// });

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/portfoliogenerator_db",{ useNewUrlParser: true } );

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get('/', (req, res) => {
  console.log('hi' )
  res.send("hi");
})
//Add routes
app.use(routes);
// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }

// Define API routes here

// Send every other request to the React app
// Define any API routes before this runs
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
