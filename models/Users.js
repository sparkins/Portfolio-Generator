const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: { type: String, required: true }, //the ID name they use to log in
    passwordHash: { type: String, required: true },
    firstName: { type: String, required: true }, 
    lastName: { type: String, required: true }, 
    portfolioName: { type: String, required: true },
    bio: { type: String, required: true },
    experience: { type: String, required: true },
    skills: { type: String, required: true },
    projectOutlines: { type: String, required: true }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
// module.exports = {name: 'test'}