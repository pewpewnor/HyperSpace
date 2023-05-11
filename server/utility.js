const crypto = require("crypto");

function generateKey() {
	return crypto.randomBytes(48).toString("hex");
}

function isBadString(data) {
	if (data === undefined || typeof data !== "string") {
		return true;
	}
	return false;
}

function isBadBoolean(data) {
	if (data === undefined || typeof data !== "boolean") {
		return true;
	}
	return false;
}

module.exports = {
	generateKey,
	isBadString,
};
