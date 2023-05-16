const mongoose = require("mongoose");
const Channel = require("./Channel");

const spaceSchema = new mongoose.Schema({
	name: {
		type: String,
		unique: true,
		lowercase: true,
		minLength: 1,
		maxLength: 20,
		required: true,
	},
	description: {
		type: String,
		default: "",
		maxLength: 300,
	},
	ownerID: {
		type: mongoose.SchemaTypes.ObjectId,
		required: true,
		ref: "User",
	},
	picture: {
		type: String,
		default: null,
	},
	bannerPicture: {
		type: String,
		default: null,
	},
	channels: {
		type: [mongoose.SchemaTypes.ObjectId],
		default: () => {
			const general = new Channel({ name: "general" });
			general.save();
			return [general._id];
		},
		ref: "Channel",
	},
	members: {
		type: [mongoose.SchemaTypes.ObjectId],
		required: true,
		ref: "User",
	},
});

module.exports = mongoose.model("Space", spaceSchema);
