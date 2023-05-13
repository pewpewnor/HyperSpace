import LocationContext from "contexts/LocationContext";
import { useContext } from "react";
import CreateChannelPopUp from "./create-channel-popup";
// import { findUser } from "utils/find";
// import { useState } from "react";
import "./channelview.css";

export default function ChannelView(props) {
	const { changeCurrentChannel } = useContext(LocationContext);

	const channels = props.channelsArray.map((channel) => (
		<button
			key={channel.ID}
			onClick={() => {
				changeCurrentChannel(channel.ID);
			}}
		>
			{channel.name}
		</button>
	));

	function showPopUp() {
		return (
			<CreateChannelPopUp
				handleCreateChannelPopUp={props.handleCreateChannelPopUp}
			/>
		);
	}

	return (
		<div className="channelView__container">
			{channels}
			{/* if the user is the mod of the space, this button is visible */}

			{props.user.ID === props.space.ownerID && (
				<button onClick={showPopUp} className="button_default">
					+
				</button>
			)}
		</div>
	);
}
