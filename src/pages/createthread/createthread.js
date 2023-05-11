import { useState } from "react";

import "./createthread.css";
import Navbar from "components/navbar/Navbar";

import InputField from "components/form/inputfield";
import SubmitBtn from "components/ui/submitBtn";

import userData from "data/userdata";
import { findSpace, findChannel } from "utils/find";

export default function CreateThread() {
	// userData[0] should be change later
	const [selectedSpaces, setSelectedSpaces] = useState(
		userData[0].joinedSpacesID[0]
	);
	const [selectedChannel, setSelectedChannel] = useState("");

	function handleSpaceChange(event) {
		const newValue = event.target.value;
		setSelectedSpaces(newValue);
		console.log(findSpace(newValue).name);
	}

	function handleChannelChange(event) {
		const newValue = event.target.value;
		setSelectedChannel(newValue);
		console.log(findChannel(newValue).name);
	}

	return (
		<div className="create__thread font_size_rule">
			<Navbar />
			<div className="create__thread__container font_size_rule">
				<div className="create__thread__title">
					<div className="border"></div>
					<h1>Create New Thread</h1>
				</div>
				<div className="create__thread__target__container">
					<div className="create__thread__target__space">
						<label for="space">Choose Space: </label>
						<select
							name="space"
							id="spaces"
							value={selectedSpaces}
							onChange={handleSpaceChange}
							className="select__dropdown"
						>
							{/* Index 0 here should be change into userData id */}
							{userData[0].joinedSpacesID.map((space) => (
								<option value={space}>
									{findSpace(space).name}
								</option>
							))}
							;
						</select>
					</div>
					<div className="create__thread__target__channel">
						{selectedSpaces && (
							<>
								<label for="channel">Choose channel: </label>
								<select
									name="channel"
									id="channel"
									value={selectedChannel}
									onChange={handleChannelChange}
									className="select__dropdown"
								>
									{findSpace(selectedSpaces).channelsID.map(
										(channel) => (
											<option value={channel}>
												{findChannel(channel).name}
											</option>
										)
									)}
									;
								</select>
							</>
						)}
					</div>
					<div className="create__thread__inputField__container">
						<InputField
							label="Thread Title"
							type="inputField__title"
						/>
						<InputField label="Body" type="inputField__body" />
					</div>
					<SubmitBtn />
				</div>
			</div>
		</div>
	);
}
