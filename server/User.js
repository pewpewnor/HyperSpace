const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		lowercase: true,
	},
	profilePicture: {
		type: String,
		required: true,
	},
	subscription: {
		type: String,
		required: true,
	},
	joinedSince: {
		type: Date,
		default: () => Date.now(),
		immutable: true,
	},
	ownedSpacesID: {
		type: [mongoose.SchemaTypes.ObjectId],
		default: [],
		ref: "Space",
	},
	joinedSpacesID: {
		type: [mongoose.SchemaTypes.ObjectId],
		default: [],
		ref: "Space",
	},
});

module.exports = mongoose.model("User", userSchema);
