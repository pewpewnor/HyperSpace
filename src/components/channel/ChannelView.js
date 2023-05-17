import LocationContext from "contexts/LocationContext";
import UserContext from "contexts/UserContext";
import { useContext } from "react";
import "./channelview.css";

export default function ChannelView(props) {
	const [user] = useContext(UserContext);
	const { changeCurrentChannel } = useContext(LocationContext);

	const channels = props.channels.map((channel) => (
		<button
			key={channel._id}
			onClick={() => {
				changeCurrentChannel(channel);
			}}
			className={
				props.currentChannel._id === channel._id ? "isActive" : ""
			}
		>
			{channel.name}
		</button>
	));

	return (
		<div className="channelView__container">
			{channels}
			{user && user._id === props.space.ownerID && (
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
