const mongoose = require("mongoose");

const User = mongoose.model("User", new mongoose.Schema({
    googleID: { type: String, required: true, unique: true }
}));

module.exports = User;