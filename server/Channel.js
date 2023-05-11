const mongoose = require("mongoose");

const channelSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	threadsID: {
		type: [mongoose.SchemaTypes.ObjectId],
		default: [],
		ref: "Thread",
	},
});

module.exports = mongoose.model("Channel", channelSchema);
