import { useState } from "react";

import Navbar from "components/navbar/Navbar";
import "./createthread.css";

import InputField from "components/form/inputfield";
import SubmitBtn from "components/ui/submitBtn";

import userData from "data/userdata";
import { findChannel, findSpace } from "utils/find";

export default function CreateThread() {
	const [selectedSpaces, setSelectedSpaces] = useState(
		userData[0].joinedSpacesID[0]
	);

	const [selectedChannel, setSelectedChannel] = useState(
		findSpace(selectedSpaces).channelsID[0]
	);

	const [newThread, setNewThread] = useState({
		space: selectedSpaces,
		channel: selectedChannel,
		title: "",
		body: "",
		image: "",
	});

	function handleSpaceChange(event) {
		const selected = event.target.value;
		setSelectedSpaces(selected);

		setNewThread((prev) => ({
			...prev,
			space: selected,
			channel: findSpace(selected).channelsID[0],
		}));
	}

	function handleChannelChange(event) {
		const selected = event.target.value;
		setSelectedChannel(selected);

		setNewThread((prev) => ({
			...prev,
			channel: selected,
		}));
	}

	function handleTitleChange(event) {
		setNewThread((prev) => ({
			...prev,
			title: event.target.value,
		}));
	}

	function handleBodyChange(event) {
		setNewThread((prev) => ({
			...prev,
			body: event.target.value,
		}));
	}

	function handleSubmit(event) {
		console.log(newThread);
	}

	return (
		<div className="create__thread font_size_rule">
			<Navbar />
			<div className="create__thread__container font_size_rule">
				<div className="create__thread__title ">
					<div className="border"></div>
					<h1 className="font_size_rule">Create New Thread</h1>
				</div>
				<div className="create__thread__target__container">
					<div className="create__thread__target__space">
						<label htmlFor="space">Choose Space: </label>
						<select
							name="space"
							id="spaces"
							value={selectedSpaces}
							onChange={handleSpaceChange}
							className="select__dropdown"
						>
							{/* Index 0 here should be change into userData id */}
							{userData[0].joinedSpacesID.map((space) => (
								<option value={space} key={findSpace(space).ID}>
									{findSpace(space).name}
								</option>
							))}
							;
						</select>
					</div>
					<div className="create__thread__target__channel">
						{selectedSpaces && (
							<>
								<label htmlFor="channel">
									Choose channel:{" "}
								</label>
								<select
									name="channel"
									id="channel"
									value={selectedChannel}
									onChange={handleChannelChange}
									className="select__dropdown"
								>
									{findSpace(selectedSpaces).channelsID.map(
										(channel) => (
											<option
												value={channel}
												key={findChannel(channel).ID}
											>
												{findChannel(channel).name}
											</option>
										)
									)}
								</select>
							</>
						)}
					</div>
					<div className="create__thread__inputField__container">
						<InputField
							label="Thread Title"
							type="inputField__title"
							handleChange={handleTitleChange}
						/>
						<InputField
							label="Thread Text"
							type="inputField__body"
							handleChange={handleBodyChange}
						/>
						<div className="create__thread__inputImage">
							<h1>Image (optional)</h1>
							<input type="file" className="input__image"></input>
						</div>
					</div>
					<SubmitBtn name={"Create Thread"} onClick={handleSubmit} />
				</div>
			</div>
		</div>
	);
}
