const mongoose = require("mongoose");

const spaceSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	spaceDescription: {
		type: String,
		default: "",
	},
	channelsID: {
		type: [mongoose.SchemaTypes.ObjectId],
		default: [],
		ref: "Channel",
	},
	members: {
		type: Number,
		default: 1,
	},
});

module.exports = mongoose.model("Space", spaceSchema);
