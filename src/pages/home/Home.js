import Navbar from "../../components/navbar/Navbar";
import MySpace from "components/space/MySpace";
import Thread from "components/thread/Thread";
import threadData from "data/threaddata";
import "./home.css";

// for mockup data only
import spaceData from "data/spacedata";
import channelData from "data/channeldata";

function Home() {
	const threads = threadData.map((thread) => (
		<Thread
			key={thread.ID}
			space={spaceData[0]}
			channel={channelData[0]}
			{...thread}
		/>
	));

	return (
		<div className="all">
			<Navbar />
			<div className="body">
				<div className="left-container">
					<MySpace />
				</div>
				<div className="middle-container">
					<div className="middle-container__thread-section">
						{threads.length ? threads : <h1>No threads yet!</h1>}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
