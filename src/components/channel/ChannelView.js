import LocationContext from "contexts/LocationContext";
import { useContext } from "react";
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

	function handleCreateNewChannel(event){
		alert('user want to create new channel')
	}

	return <div className="channelView__container">{channels} 
	{/* if the user is the mod of the space, this button is visible */}
	<button onClick={handleCreateNewChannel} className="button_default" >+</button></div>;
}
