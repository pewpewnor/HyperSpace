import LocationContext from "contexts/LocationContext";
import { useContext } from "react";
import "./channelview.css";

export default function ChannelView(props) {
	const { currentChannel, changeCurrentChannel } =
		useContext(LocationContext);

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

	return <div className="channelView__container">{channels}</div>;
}
