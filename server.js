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
// Require all models
var db = require("./models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/portfoliogenerator_db",{ useNewUrlParser: true } );

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");
  next();
});

function verifyToken(req, res, next) {
  // check header or url parameters or post parameters for token
  var token = req.body.token || req.query.token || req.headers['x-access-token'];
  if (token) {
      jwt.verify(token, env.JWT_SECRET, (err, decod) => {
          if (err) {
              res.status(403).json({
                  message: "Wrong Token"
              });
          } else {
              req.decoded = decod;
              next();
          }
      });
  } else {
      res.status(403).json({
          message: "No Token"
      });
  }
}

app.post('/login', function(req, res) {
  db.users.findOne({
      username: req.body.username
  }, function(error, result) {

   
      if (!result) return res.status(404).json({ error: 'user not found' });

      if (!bcrypt.compareSync(req.body.password, result.password)) return res.status(401).json({ error: 'incorrect password '});

      var payload = {
          _id: result._id,
          username: result.username,
      };

      var token = jwt.sign(payload, env.JWT_SECRET, { expiresIn: '4h' });
console.log(env.JWT_SECRET);
      return res.json({
          message: 'successfuly authenticated',
          token: token
      });
  });
})

//curl -d "username=fred&password=unodostresgreenbaypackers" -X POST http://localhost:3001/signup
app.post('/signup', function(req, res) {
  db.users.findOne({
      username: req.body.username
  }, function(error, result) {
      if (result) return res.status(406).json({ error: 'user already exists' });

      if (!req.body.password) return res.status(401).json({ error: 'you need a password' });

      if (req.body.password.length <= 5) return res.status(401).json({ error: 'password length must be greater than 5' });

      console.log('got to line 92')

      bcrypt.genSalt(10, function(err, salt) {
          bcrypt.hash(req.body.password, salt, function(err, hash) {
              db.users.insert({
                  username: req.body.username,
                  password: hash
              }, function(error, user) {

                console.log('got to line 101');
                  
                  // Log any errors
                  if (error) {
                      res.send(error);
                  } else {
                      res.json({
                          message: 'successfully signed up'
                      });
                  }
              });
          });
      });
  });
})

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get('/', (req, res) => {
  console.log('hi' )
  res.send("hi");
})

app.get('/allprojects', function(req, res){
	db.Projects.find({}, function(error, result){
      //result is an array
	    res.json(result);
	});
});

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
