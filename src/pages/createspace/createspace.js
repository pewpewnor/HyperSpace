import "./createspace.css";

import Navbar from "components/navbar/Navbar";

import InputField from "components/form/inputfield";
import SubmitBtn from "components/ui/submitBtn";
import UserContext from "contexts/UserContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateSpace() {
	const [user] = useContext(UserContext);
	const navigate = useNavigate();
	const [newSpace, setNewSpace] = useState({
		name: "",
		description: "",
		bannerImage: "",
		// profileImage: "",
	});

	if (!user) {
		navigate("/login");
		return;
	}

	function handleTitleChange(event) {
		setNewSpace((prev) => ({
			...prev,
			name: event.target.value,
		}));
	}

	function handleBodyChange(event) {
		setNewSpace((prev) => ({
			...prev,
			description: event.target.value,
		}));
	}

	async function handleSubmit() {
		const res = await fetch("/api/crud/space", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ ...user, userID: user._id, ...newSpace }),
		});
		if ((await res.json()).status) {
			navigate("/space/" + newSpace.name);
			return;
		}
		alert("Space name/title already exists, try a different one!");
	}

	return (
		<div className="create__space__page__container">
			<Navbar />
			<div className="create__thread__container">
				<div className="create__thread__title">
					<div className="border_space"></div>
					<h1 className="font_size_rule">Create New Space</h1>
				</div>

				<div className="create__thread__target__container">
					<div className="create__thread__inputField__container">
						<InputField
							label="Space Name"
							type="inputField__title"
							handleChange={handleTitleChange}
						/>
						<InputField
							label="Space Description"
							type="inputField__body"
							handleChange={handleBodyChange}
						/>
						{/* TODO Uncomment */}
						{/* <div className="create__thread__inputImage">
							<h1>Space banner</h1>
							<input type="file" className="input__image"></input>
						</div> */}
						{/* <div className="create__thread__inputImage">
							<h1>Space Profile</h1>
							<input type="file" className="input__image"></input>
						</div> */}

						<SubmitBtn
							name={"Create Space"}
							onClick={handleSubmit}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
