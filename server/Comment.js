const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
	postDate: {
		type: Date,
		default: () => Date.now(),
	},
	text: {
		type: String,
		required: true,
	},
	picture: {
		type: String,
		default: null,
	},
	upvote: {
		type: Number,
		default: 0,
	},
	downvote: {
		type: Number,
		default: 0,
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
	},
});

module.exports = mongoose.Model("Comment", commentSchema);
