const mongoose = require("mongoose");

const threadSchema = new mongoose.Schema({
	postDate: {
		type: Date,
		default: () => Date.now(),
	},
	views: {
		type: Number,
		default: 0,
	},
	title: {
		type: String,
		required: true,
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
	comments: {
		type: [mongoose.SchemaTypes.ObjectId],
		default: [],
		ref: "Comment",
	},
	authorID: {
		type: [mongoose.SchemaTypes.ObjectId],
		required: true,
		ref: "User",
	},
});

module.exports = mongoose.Model("Thread", threadSchema);
