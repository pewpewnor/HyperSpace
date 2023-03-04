import { findThread } from "utils/find";
import Thread from "./Thread";

export default function ThreadView(props) {
	const threadsArray = props.threadsID.map((threadID) => {
		return findThread(threadID);
	});

	const threads = threadsArray.map((thread) => {
		return <Thread key={thread.ID} {...thread} />;
	});

	return <div>{threads}</div>;
}
