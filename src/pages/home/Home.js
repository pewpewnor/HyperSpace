import ThreadView from "../../components/thread/ThreadView";
import Navbar from "../../components/navbar/Navbar";
import SpaceContext from "contexts/SpaceContext";
import { findChannel, findSpace } from "utils/find";
import "./home.css";

function Home() {
	const currentSpaceID = "SPA001";
	const currentChannelID = "CHA001";
	const space = findSpace(currentSpaceID);
	const channel = findChannel(currentChannelID);

	return (
		<div className="body">
			<SpaceContext.Provider
				value={{
					space: space,
					channel: channel,
				}}
			>
				<Navbar />
				<ThreadView threadsID={channel.threadsID} />
			</SpaceContext.Provider>
		</div>
	);
}

export default Home;
