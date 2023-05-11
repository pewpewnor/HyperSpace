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

// Test

async function deleteAll() {
	await Channel.deleteMany();
	await ChildComment.deleteMany();
	await Comment.deleteMany();
	await Space.deleteMany();
	await Thread.deleteMany();
	await User.deleteMany();

	console.log("Server: All data in database is deleted");
}

// function generateObjectID() {
// 	for (let i = 0; i < 4; i++) {
// 		console.log(new mongoose.Types.ObjectId());
// 	}
// }

// generateObjectID();

const userData = require("./mockup/userData");
const spaceData = require("./mockup/spaceData");
const channelData = require("./mockup/channelData");
const threadData = require("./mockup/threadData");
const commentData = require("./mockup/commentData");
const childCommentData = require("./mockup/childCommentData");

async function run() {
	try {
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

// End test

const { generateKey, isBadString } = require("./utility");

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

app.post("/api/myspace", async (req, res) => {
	try {
		const { key, userID } = req.body;
		// TODO: bring back the commented line
		// const user = await User.findById(userID).populate("joinedSpacesID");
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
			error: "Invalid data given || Server / database error!",
		});
	}
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
	console.log(`Server: Server listening on port ${PORT}`);
});
