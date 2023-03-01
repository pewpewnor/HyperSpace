import userData from "data/userdata";
import spaceData from "data/spacedata";

function findUser(userID) {
	return userData.find((user) => user.ID === userID);
}

function findSpace(spaceID) {
	return spaceData.find((space) => space.ID === spaceID);
}

export { findUser, findSpace };
