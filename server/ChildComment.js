const mongoose = require("mongoose");

const childCommentSchema = new mongoose.Schema({
	postDate: {
		type: Date,
		default: () => Date.now(),
	},
	text: {
		type: String,
		required: true,
	},
	authorID: {
		type: [mongoose.SchemaTypes.ObjectId],
		required: true,
		ref: "User",
	},
});

module.exports = mongoose.Model("ChildComment", childCommentSchema);
