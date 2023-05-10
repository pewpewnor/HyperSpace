const mongoose = require("mongoose");

const threadSchema = new mongoose.Schema({
	postDate: {
		type: Date,
		default: () => Date.now(),
		immutable: true,
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
		type: [mongoose.SchemaTypes.ObjectId],
		default: [],
		ref: "User",
	},
	downvote: {
		type: [mongoose.SchemaTypes.ObjectId],
		default: [],
		ref: "User",
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
		immutable: true,
	},
});

module.exports = mongoose.model("Thread", threadSchema);
