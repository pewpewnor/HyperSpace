import userData from "data/userdata";
import spaceData from "data/spacedata";
import channelData from "data/channeldata";
import threadData from "data/threaddata";

function findUser(userID) {
	return userData.find((user) => user.ID === userID);
}

function findSpace(spaceID) {
	return spaceData.find((space) => space.ID === spaceID);
}

function findChannel(channelID) {
	return channelData.find((channel) => channel.ID === channelID);
}

function findThread(threadID) {
	return threadData.find((thread) => thread.ID === threadID);
}

export { findUser, findSpace, findChannel, findThread };
