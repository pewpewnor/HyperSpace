import LocationContext from "contexts/LocationContext";
import { useContext } from "react";
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

	return (
		<div className="channelView__container">
			{channels}
			{/* if the user is the mod of the space, this button is visible */}

			{props.user.ID === props.space.ownerID && (
				<button
					onClick={props.handleCreateChannelPopUp}
					className="button_default"
				>
					+
				</button>
			)}
		</div>
	);
}
