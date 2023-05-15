const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
		unique: true,
		lowercase: true,
		minLength: 3,
		maxLength: 20,
	},
	password: {
		type: String,
		required: true,
		minLength: 3,
		maxLength: 20,
	},
	key: {
		type: String,
		default: null,
	},
	profilePicture: {
		type: String,
		default: "/assets/default-profile-picture.svg",
	},
	subscription: {
		type: String,
		default: "Astronaut",
	},
	joinedDate: {
		type: Date,
		default: () => Date.now(),
		immutable: true,
	},
	joinedSpaces: {
		type: [mongoose.SchemaTypes.ObjectId],
		default: [],
		ref: "Space",
	},
});

module.exports = mongoose.model("User", userSchema);
