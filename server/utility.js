const mongoose = require("mongoose");
const crypto = require("crypto");

const Channel = require("./Channel");
const ChildComment = require("./ChildComment");
const Comment = require("./Comment");
const Space = require("./Space");
const Thread = require("./Thread");
const User = require("./User");

function generateKey() {
	return crypto.randomBytes(48).toString("hex");
}

function isBadString(data) {
	if (data === undefined || typeof data !== "string") {
		return true;
	}
	return false;
}

function isBadStringNullOk(data) {
	if (data === undefined) return true;
	if (data === null) return false;
	if (typeof data !== "string") return true;
	return false;
}

function isBadObjectID(id) {
	if (isBadString(id) || id.length !== 24) {
		return true;
	}
	return false;
}

async function isNotLoggedIn({ key, userID }) {
	if (isBadString(key) || isBadObjectID(userID)) return true;
	try {
		const user = await User.findById(userID);
		if (!user || user.key !== key) return true;
	} catch {
		return true;
	}
	return false;
}

async function deleteAll() {
	await Channel.deleteMany();
	await ChildComment.deleteMany();
	await Comment.deleteMany();
	await Space.deleteMany();
	await Thread.deleteMany();
	await User.deleteMany();

	console.log("Server: All data in database is deleted");
}

function generateObjectID() {
	for (let i = 0; i < 4; i++) {
		console.log(new mongoose.Types.ObjectId());
	}
}

module.exports = {
	generateKey,
	isBadString,
	isBadStringNullOk,
	isBadObjectID,
	isNotLoggedIn,
	deleteAll,
	generateObjectID,
};
