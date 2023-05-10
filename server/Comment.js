const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
	postDate: {
		type: Date,
		default: () => Date.now(),
		immutable: true,
	},
	text: {
		type: String,
		required: true,
	},
	childComments: {
		type: [mongoose.SchemaTypes.ObjectId],
		default: [],
		ref: "ChildComment",
	},
	authorID: {
		type: [mongoose.SchemaTypes.ObjectId],
		required: true,
		ref: "User",
		immutable: true,
	},
});

module.exports = mongoose.model("Comment", commentSchema);
