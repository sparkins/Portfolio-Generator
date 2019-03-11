const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String, required: true }, //full name
    username: { type: String, required: true }, //the ID name they use to log in
    passwordHash: { type: String, required: true }, 
    bio: { type: String, required: true },
    layout: { type: String, required: true },
    textColor: { type: String, required: true }
});

const User = mongoose.model("User", userSchema);

module.exports = User;