import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import MySpace from "components/space/MySpace";
import ChannelView from "components/channel/ChannelView";
import Thread from "components/thread/Thread";
import LocationContext from "contexts/LocationContext";
import { findChannel, findThread } from "utils/find";
import "./spacepage.css";

function SpacePage(props) {
	const [currentChannel, setCurrentChannel] = useState(
		findChannel(props.space.channelsID[0])
	);

	function handleChangeCurrentChannel(channelID) {
		const channel = findChannel(channelID);
		setCurrentChannel(channel);
	}

	const channelsArray = props.space.channelsID.map((channelID) =>
		findChannel(channelID)
	);

	const threads = currentChannel.threadsID.map((threadID) => {
		const thread = findThread(threadID);

		return (
			<Thread
				key={thread.ID}
				space={props.space}
				channel={currentChannel}
				{...thread}
			/>
		);
	});

	return (
		<div className="all">
			<Navbar />
			<div className="body">
				<div className="left-container">
					<MySpace />
				</div>
				<div className="middle-container">
					<LocationContext.Provider
						value={{
							currentChannel: currentChannel,
							changeCurrentChannel: handleChangeCurrentChannel,
						}}
					>
						<div className="middle-container__filter-bar">
							<ChannelView channelsArray={channelsArray} />
						</div>
						<div className="middle-container__thread-section">
							{threads.length ? (
								threads
							) : (
								<h1>No threads yet!</h1>
							)}
						</div>
					</LocationContext.Provider>
				</div>
			</div>
		</div>
	);
}

export default SpacePage;
