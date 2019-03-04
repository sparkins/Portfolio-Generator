var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new ScoreBoardSchema object
var ProjectsSchema = new Schema({
    // `name` - The name of your project
    name: String,
    // `description` - The description of your project  
    description: String,
    // `image` - The url for the image you wish to display for teh project
    image: String,
    // `github` - The url to the github project location
    github: String,
    // `launchapp` - The url to play the game, or launch the application
    launchapp: String
    });

// This creates our model from the above schema, using mongoose's model method
var Projects = mongoose.model("Projects", ProjectsSchema);

// Export the Book model
module.exports = Projects;