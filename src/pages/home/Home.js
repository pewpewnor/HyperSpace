import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import ThreadView from "../../components/thread/ThreadView";
import LocationContext from "contexts/LocationContext";
import { findChannel, findSpace } from "utils/find";
import SpaceView from "components/space/MySpace";
import "./home.css";

function Home() {
	const [currentLocation, setCurrentLocation] = useState({
		space: findSpace("SPA001"),
		channel: findChannel("CHA001"),
	});

	function handleChangeLocation(spaceID, channelID) {
		const space = findSpace(spaceID);
		const channel = findChannel(channelID);
		setCurrentLocation({ space: space, channel: channel });
	}

	return (
		<div className="all">
			<Navbar />
			<div className="body">
				<LocationContext.Provider
					value={{
						currentLocation: currentLocation,
						changeLocation: handleChangeLocation,
					}}
				>
					<div className="left-container">
						<SpaceView />
					</div>
					<div className="middle-container">
						{/* <div className="middle-container__filter-bar">
							<ChannelView />
						</div> */}
						<div className="middle-container__thread-section">
							<ThreadView
								threadsID={currentLocation.channel.threadsID}
							/>
						</div>
					</div>
				</LocationContext.Provider>
			</div>
		</div>
	);
}

export default Home;
