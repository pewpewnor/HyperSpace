import Thread from "components/thread/Thread";
import threadData from "data/threaddata";

export default function ThreadView() {
	const threads = threadData.map((thread) => {
		return <Thread key={thread.ID} {...thread} />;
	});
	return <div>{threads}</div>;
}
