const mongoose = require("mongoose");

const spaceSchema = new mongoose.Schema({});

module.exports = mongoose.model("Space", spaceSchema);
