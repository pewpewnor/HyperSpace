const mongoose = require("mongoose");
const Channel = require("./Channel");

const spaceSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		default: "",
	},
	ownerID: {
		type: mongoose.SchemaTypes.ObjectId,
		required: true,
		ref: "User",
	},
	channelsID: {
		type: [mongoose.SchemaTypes.ObjectId],
		default: () => {
			const general = new Channel({ name: "general" });
			general.save();
			return [general._id];
		},
		ref: "Channel",
	},
	members: {
		type: Number,
		default: 1,
	},
});

module.exports = mongoose.model("Space", spaceSchema);
