const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(express.json());

mongoose
	.connect(process.env.DEV_URI)
	.then(() => console.log("Server: Database connected"))
	.catch((err) => console.log(err));

const Channel = require("./Channel");
const ChildComment = require("./ChildComment");
const Comment = require("./Comment");
const Space = require("./Space");
const Thread = require("./Thread");
const User = require("./User");

// Utility functions

const {
	generateKey,
	isBadString,
	isBadStringNullOk,
	isBadObjectID,
	isNotLoggedIn,
	deleteAll,
	generateObjectID,
} = require("./utility");

// Insert mockup data

const userData = require("./mockup/userData");
const spaceData = require("./mockup/spaceData");
const channelData = require("./mockup/channelData");
const threadData = require("./mockup/threadData");
const commentData = require("./mockup/commentData");
const childCommentData = require("./mockup/childCommentData");

async function run() {
	try {
		// generateObjectID();
		await deleteAll();

		await User.insertMany(userData);
		await Space.insertMany(spaceData);
		await Channel.insertMany(channelData);
		await Thread.insertMany(threadData);
		await Comment.insertMany(commentData);
		await ChildComment.insertMany(childCommentData);
	} catch (error) {
		console.error(error);
	}
	console.log("Server: Halleluya the run works");
}

run();

// Uses username & password
// Validate login
app.post("/api/login", async (req, res) => {
	const { username, password } = req.body;
	if (isBadString(username) || isBadString(password)) {
		res.status(400).json({
			error: "Username or password has invalid format!",
		});
		return;
	}

	try {
		const user = await User.findOne({
			username: username,
			password: password,
		});

		if (user === null) {
			res.status(401).json({
				error: "Username or password credential is invalid!",
			});
			return;
		}

		user.key = generateKey();
		user.save();

		res.status(200).json(user);
	} catch (error) {
		console.error(error);
		res.status(500).json({
			error: "Server / database error!",
		});
	}
});

// Uses username & password
// Register a new user with given data
app.post("/api/register", async (req, res) => {
	const { username, password } = req.body;
	if (isBadString(username) || isBadString(password)) {
		res.status(400).json({
			error: "Username or password has invalid format!",
		});
		return;
	}

	try {
		if (await User.exists({ username: username })) {
			res.status(401).json({
				error: "Username already exists, try another one!",
			});
			return;
		}

		await User.create({
			username: username,
			password: password,
		});

		res.status(200).json({ status: "Account has been created!" });
	} catch (error) {
		console.error(error);
		res.status(500).json({
			error: "Invalid username or password due to validation || Server / database error!",
		});
	}
});

// TODO: delete this once not needed
// Uses key & userID
// Get all possible information from userID
app.post("/api/user/all", async (req, res) => {
	const { key, userID } = req.body;
	if (isBadString(key) || isBadObjectID(userID)) {
		res.status(400).json({
			error: "Key or UserID has invalid format!",
		});
		return;
	}
	try {
		const user = await User.findById(userID).populate({
			path: "joinedSpaces",
			populate: {
				path: "channels",
				populate: {
					path: "threads",
					populate: {
						path: "comments",
						populate: {
							path: "childComments",
						},
					},
				},
			},
		});
		if (!user || user.key !== key) {
			res.status(403).json({
				error: "You must be logged in to do this!",
			});
			return;
		}
		res.status(200).json(user);
		return;
	} catch (error) {
		console.error(error);
		res.status(500).json({
			error: "Server / database error!",
		});
	}
});

// Uses key & userID
// Get all joined spaces information for this user
app.post("/api/user/myspace", async (req, res) => {
	const { key, userID } = req.body;
	if (isBadString(key) || isBadObjectID(userID)) {
		res.status(400).json({
			error: "Key or UserID has invalid format!",
		});
		return;
	}
	try {
		const user = await User.findById(userID).populate("joinedSpaces");
		if (!user || user.key !== key) {
			res.status(403).json({
				error: "You must be logged in to do this!",
			});
			return;
		}
		res.status(200).json(user);
		return;
	} catch (error) {
		console.error(error);
		res.status(500).json({
			error: "Server / database error!",
		});
	}
});

// Uses spaceID
// Get space information + all channel information for that space
app.get("/api/space", async (req, res) => {
	const { spaceID } = req.query;
	if (isBadObjectID(spaceID)) {
		res.status(400).json({
			error: "SpaceID has invalid format!",
		});
		return;
	}

	try {
		const space = await Space.findById(spaceID).populate("channels");
		if (!space) {
			res.status(401).json({
				error: "SpaceID does not exist!",
			});
			return;
		}
		res.status(200).json(space);
	} catch (error) {
		console.error(error);
		res.status(500).json({
			error: "Server / database error!",
		});
	}
});

// Uses userID + key, name, description
// Create new space
app.post("/api/crud/space", async (req, res) => {
	if (await isNotLoggedIn(req.body)) {
		res.status(403).json({
			error: "You must be logged in to do this!",
		});
		return;
	}
	const { userID, name, description } = req.body;
	if (
		isBadObjectID(userID) ||
		isBadString(name) ||
		isBadString(description)
	) {
		res.status(400).json({
			error: "UserID or name or description has invalid format!",
		});
		return;
	}

	try {
		const newSpace = await Space.create({
			name: name,
			description: description,
			ownerID: userID,
			members: [userID],
		});
		const user = await User.findById(userID);
		user.joinedSpaces.push(newSpace._id);
		user.save();

		res.status(200).json({ status: "Space has been created!" });
	} catch (error) {
		console.error(error);
		res.status(500).json({
			error: "Server / database error!",
		});
	}
});

// Uses userID + key, name, spaceID
// Create new channel
app.post("/api/crud/channel", async (req, res) => {
	if (await isNotLoggedIn(req.body)) {
		res.status(403).json({
			error: "You must be logged in to do this!",
		});
		return;
	}
	const { userID, name, spaceID } = req.body;
	if (isBadObjectID(userID) || isBadString(name) || isBadObjectID(spaceID)) {
		res.status(400).json({
			error: "UserID or name or spaceID has invalid format!",
		});
		return;
	}

	try {
		const newChannel = await Channel.create({
			name: name,
		});
		const space = await Space.findById(spaceID);
		space.channels.push(newChannel._id);
		space.save();

		res.status(200).json({ status: "Channel has been created!" });
	} catch (error) {
		console.error(error);
		res.status(500).json({
			error: "SpaceID invalid || Server / database error!",
		});
	}
});

// Uses channelID
// Get all threads for this channel
app.get("/api/threads", async (req, res) => {
	const { channelID } = req.query;
	if (isBadObjectID(channelID)) {
		res.status(400).json({
			error: "ChannelID has invalid format!",
		});
		return;
	}

	try {
		const threads = await Channel.findById(channelID)
			.populate("threads")
			.select("threads");
		if (!threads) {
			res.status(401).json({
				error: "ChannelID does not exist!",
			});
			return;
		}
		res.status(200).json(threads);
	} catch (error) {
		console.error(error);
		res.status(500).json({
			error: "Server / database error!",
		});
	}
});

// Uses userID + key, title, text, picture, channelID
// Create new thread
app.post("/api/crud/thread", async (req, res) => {
	if (await isNotLoggedIn(req.body)) {
		res.status(403).json({
			error: "You must be logged in to do this!",
		});
		return;
	}
	const { userID, title, text, picture, channelID } = req.body;
	if (
		isBadObjectID(userID) ||
		isBadString(title) ||
		isBadString(text) ||
		isBadStringNullOk(picture) ||
		isBadObjectID(channelID)
	) {
		res.status(400).json({
			error: "UserID or title or text or picture link or channelID has invalid format!",
		});
		return;
	}

	try {
		const newThread = await Thread.create({
			title: title,
			text: text,
			picture: picture,
			authorID: userID,
		});
		const channel = await Channel.findById(channelID);
		channel.threads.push(newThread._id);
		channel.save();

		res.status(200).json({ status: "Thread has been created!" });
	} catch (error) {
		console.error(error);
		res.status(500).json({
			error: "Invalid Channel ID || Server / database error!",
		});
	}
});

// Uses threadID
// Get all comments + child comments for this thread
app.get("/api/comments", async (req, res) => {
	const { threadID } = req.query;
	if (isBadObjectID(threadID)) {
		res.status(400).json({
			error: "ThreadID has invalid format!",
		});
		return;
	}

	try {
		const comments = await Thread.findById(threadID)
			.populate({
				path: "comments",
				populate: "childComments",
			})
			.select("comments");
		if (!comments) {
			res.status(401).json({
				error: "ThreadID does not exist!",
			});
			return;
		}
		res.status(200).json(comments);
	} catch (error) {
		console.error(error);
		res.status(500).json({
			error: "Server / database error!",
		});
	}
});

// Uses userID + key, text, threadID
// Create new comment
app.post("/api/crud/comment", async (req, res) => {
	if (await isNotLoggedIn(req.body)) {
		res.status(403).json({
			error: "You must be logged in to do this!",
		});
		return;
	}
	const { userID, text, threadID } = req.body;
	if (isBadObjectID(userID) || isBadString(text) || isBadObjectID(threadID)) {
		res.status(400).json({
			error: "UserID or text or threadID has invalid format!",
		});
		return;
	}

	try {
		const newComment = await Comment.create({
			text: text,
			authorID: userID,
		});
		const thread = await Thread.findById(threadID);
		thread.comments.push(newComment._id);
		thread.save();

		res.status(200).json({ status: "Comment has been created!" });
	} catch (error) {
		console.error(error);
		res.status(500).json({
			error: "ThreadID invalid || Server / database error!",
		});
	}
});

// Uses userID + key, text, commentID
// Create new child comment
app.post("/api/crud/childcomment", async (req, res) => {
	if (await isNotLoggedIn(req.body)) {
		res.status(403).json({
			error: "You must be logged in to do this!",
		});
		return;
	}
	const { userID, text, commentID } = req.body;
	if (
		isBadObjectID(userID) ||
		isBadString(text) ||
		isBadObjectID(commentID)
	) {
		res.status(400).json({
			error: "UserID or text or commentID has invalid format!",
		});
		return;
	}

	try {
		const newChildComment = await ChildComment.create({
			text: text,
			authorID: userID,
		});
		const comment = await Comment.findById(commentID);
		comment.childComments.push(newChildComment._id);
		comment.save();

		res.status(200).json({ status: "Child Comment has been created!" });
	} catch (error) {
		console.error(error);
		res.status(500).json({
			error: "CommentID invalid || Server / database error!",
		});
	}
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
	console.log(`Server: Server listening on port ${PORT}`);
});
