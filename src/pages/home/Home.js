import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import ThreadView from "../../components/thread/ThreadView";
import LocationContext from "contexts/LocationContext";
import { findChannel, findSpace } from "utils/find";
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
		<div className="body">
			<Navbar />
			<LocationContext.Provider
				value={{
					currentLocation: currentLocation,
					changeLocation: handleChangeLocation,
				}}
			>
				<ThreadView threadsID={currentLocation.channel.threadsID} />
			</LocationContext.Provider>
		</div>
	);
}

export default Home;
