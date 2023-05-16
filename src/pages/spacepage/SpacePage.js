import ChannelView from "components/channel/ChannelView";
import CreateChannelPopUp from "components/channel/create-channel-popup";
import Loading from "components/loading/Loading";
import MySpace from "components/space/MySpace";
import SpaceBanner from "components/space/spaceBanner";
import Thread from "components/thread/Thread";
import LocationContext from "contexts/LocationContext";
import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";

import "./spacepage.css";

function SpacePage(props) {
	const navigate = useNavigate();
	const { spaceName } = useParams();

	const [isLoading, setIsLoading] = useState(true);
	const [searchQuery, setSearchQuery] = useState("");

	const [spaceData, setSpaceData] = useState({
		_id: "",
		name: spaceName,
		description: "",
		ownerID: "",
		picture: null,
		channels: [],
		members: [],
	});
	const [currentChannel, setCurrentChannel] = useState({
		_id: "",
		name: "general",
		threads: [],
	});

	const [isCreateChannelPopUpOpen, setIsCreateChannelPopUpOpen] =
		useState(false);

	// get threads and also change channel
	const changeCurrentChannel = useCallback(
		async (newChannel, searchQuery) => {
			try {
				const res = await fetch(
					"http://localhost:3000/api/threads?channelID=" +
						newChannel._id
				);
				if (!res.ok) {
					navigate("/404");
					return;
				}
				const resData = await res.json();

				if (searchQuery !== undefined && searchQuery.trim() !== "") {
					resData.threads = resData.threads.filter((thread) => {
						return (
							thread.title
								.toLowerCase()
								.includes(searchQuery.toLowerCase()) ||
							thread.text
								.toLowerCase()
								.includes(searchQuery.toLowerCase())
						);
					});
				}
				setCurrentChannel(resData);
			} catch (error) {}
		},
		[navigate]
	);

	useEffect(() => {
		async function getSpace() {
			try {
				const res = await fetch(
					"http://localhost:3000/api/space?spaceName=" + spaceName
				);
				if (!res.ok) {
					navigate("/404");
					return;
				}
				const resData = await res.json();
				setSpaceData(resData);
				await changeCurrentChannel(resData.channels[0]);
				setIsLoading(false);
			} catch (error) {}
		}

		getSpace();
	}, [changeCurrentChannel, navigate, spaceName]);

	function handleSearch(event) {
		setSearchQuery(event.target.value);
		changeCurrentChannel(currentChannel, event.target.value);
	}

	function handleCreateChannelPopUp() {
		setIsCreateChannelPopUpOpen(!isCreateChannelPopUpOpen);
	}

	function handleCreateChannelChange(event) {
		event.stopPropagation();
		alert(event.target.value);
	}

	function handleCreateChannelSubmit() {
		setIsCreateChannelPopUpOpen(!isCreateChannelPopUpOpen);
	}

	const threads = currentChannel.threads.map((thread) => (
		<Thread
			key={thread._id}
			{...thread}
			space={spaceData}
			channel={currentChannel}
		/>
	));

	return (
		<div className="all font_size_rule">
			{isLoading && <Loading />}
			<Navbar searchQuery={searchQuery} handleSearch={handleSearch} />
			<div className="body">
				<div className="left-container">
					<MySpace />
				</div>
				<div className="middle-container">
					<LocationContext.Provider
						value={{
							currentChannel: currentChannel,
							changeCurrentChannel: changeCurrentChannel,
						}}
					>
						<div className="middle-container__filter-bar">
							<ChannelView
								channels={spaceData.channels}
								space={spaceData}
								handleCreateChannelPopUp={
									handleCreateChannelPopUp
								}
							/>
						</div>
					</LocationContext.Provider>

					<div className="middle-container__thread-section">
						<SpaceBanner spaceData={spaceData} />

						{threads.length ? (
							threads
						) : (
							<div className="middle-container__thread-section__text">
								<h1>There's nothing here!</h1>
								<p>Maybe navigate to another channel?</p>
							</div>
						)}
					</div>
				</div>

				{isCreateChannelPopUpOpen && (
					<CreateChannelPopUp
						handleCreateChannelPopUp={handleCreateChannelPopUp}
						handleCreateChannelChange={handleCreateChannelChange}
						handleCreateChannelSubmit={handleCreateChannelSubmit}
					/>
				)}
			</div>
		</div>
	);
}

export default SpacePage;
