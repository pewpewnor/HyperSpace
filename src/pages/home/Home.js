import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import ThreadView from "../../components/thread/ThreadView";
import LocationContext from "contexts/LocationContext";
import { findChannel, findSpace } from "utils/find";
import "./home.css";
import SpaceView from "components/ui/SpaceView";
import ChannelView from "components/ui/ChannelView";

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
		<div className="body__container">
			<div className="navbar__container">
				<Navbar />
			</div>

			<LocationContext.Provider
				value={{
					currentLocation: currentLocation,
					changeLocation: handleChangeLocation,
				}}
			>
				
			<div className="navbar__body">
				<div className="left__container">
					<SpaceView />
				</div>
				<div className="right__container">
					<ChannelView />
					<div className="thread__body__container">	
						<ThreadView threadsID={currentLocation.channel.threadsID} />
					</div>
				</div>
			</div>
			

			</LocationContext.Provider>
		</div>
	);
}

export default Home;
