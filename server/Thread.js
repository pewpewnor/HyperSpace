const mongoose = require("mongoose");

const threadSchema = new mongoose.Schema({
	postDate: {
		type: Date,
		default: () => Date.now(),
		immutable: true,
	},
	views: {
		type: [mongoose.SchemaTypes.ObjectId],
		default: [],
		ref: "User",
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
	upvotes: {
		type: [mongoose.SchemaTypes.ObjectId],
		default: [],
		ref: "User",
	},
	downvotes: {
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
		type: mongoose.SchemaTypes.ObjectId,
		required: true,
		ref: "User",
		immutable: true,
	},
});

module.exports = mongoose.model("Thread", threadSchema);
