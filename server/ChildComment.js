const mongoose = require("mongoose");

const childCommentSchema = new mongoose.Schema({
	postDate: {
		type: Date,
		default: () => Date.now(),
		immutable: true,
	},
	text: {
		type: String,
		required: true,
	},
	authorID: {
		type: mongoose.SchemaTypes.ObjectId,
		required: true,
		ref: "User",
		immutable: true,
	},
});

module.exports = mongoose.model("ChildComment", childCommentSchema);
