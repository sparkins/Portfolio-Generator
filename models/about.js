var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ProjectsSchema = new Schema({
    firstName:         String,
    lastName:          String,
    portfoliofName:    String,
    bio     :          String,
    imageUrl:          String,
    experience:        String,
    skills:            String,
    projectsOutlines:  String

    });

var about = mongoose.model("about", ProjectsSchema);

module.exports = about;