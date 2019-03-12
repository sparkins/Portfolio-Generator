// Dependencies
const express = require("express");
const path = require("path");
const routes = require("./routes");
var mongojs = require("mongojs");
var logger = require("morgan");
var bodyParser = require('body-parser');

const PORT = process.env.PORT || 3001;
const app = express();

// Set the app up with morgan
app.use(logger("dev"));

// set the app up with bodyparser
app.use(bodyParser());

// Database configuration
var databaseUrl = process.env.MONGODB_URI || "portfoliogenerator_db";
var collections = ["projects", "users" ,"about"];

// Hook mongojs config to db variable
var db = mongojs(databaseUrl , collections);

// Log any mongojs errors to console
db.on("error", function(error) {
  console.log("Database Error:", error);
});

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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

  //allow the api to be accessed by other apps
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");
  next();
});

app.post('/about', function(req, res){ 
   db.about.insert(req.body, function(error, savedAbout) {
        if (error) {
          res.send(error);
        }else {
          console.log(savedAbout)
          res.json(savedAbout);
        }
      });
});


app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
