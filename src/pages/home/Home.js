import Navbar from "components/navbar/Navbar";
import MySpace from "components/space/MySpace";
import Thread from "components/thread/Thread";
import threadData from "data/threaddata";
import "./home.css";

// for mockup data only
import spaceData from "data/spacedata";
import channelData from "data/channeldata";

import PopupThread from "components/thread/PopupThread";

function Home() {
	const threads = threadData.map((thread) => (
		<Thread
			key={thread.ID}
			space={spaceData[0]}
			channel={channelData[0]}
			{...thread}
		/>
	));

	const testingthreads = threadData.map((popupthread) => (
		<PopupThread
			key={popupthread.ID}
			space={spaceData[0]}
			channel={channelData[0]}
			{...popupthread}
		/>
	));

	return (
		<div className="all font_size_rule">
			<Navbar />
			<div className="body">
				<div className="left-container">
					<MySpace />
				</div>
				<div className="middle-container">
					<div className="middle-container__filter-bar">
						<h1>Home</h1>
					</div>

					<div className="middle-container__thread-section">
						{threads.length ? (
							threads
						) : (
							<div className="middle-container__thread-section__text">
								<h1>There's nothing here!</h1>
								<p>Maybe navigate to a different space?</p>
							</div>
						)}
					</div>

					<div className="middle-container__thread-section">
						{testingthreads.length ? (
							testingthreads
						) : (
							<div className="middle-container__thread-section__text">
								<h1>There's nothing here!</h1>
								<p>Maybe navigate to a different space?</p>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
