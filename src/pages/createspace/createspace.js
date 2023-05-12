import "./createspace.css";

import Navbar from "components/navbar/Navbar";

import InputField from "components/form/inputfield";
import SubmitBtn from "components/ui/submitBtn";
import { useState } from "react";

export default function CreateSpace() {
	const [space, setSpace] = useState({
		title: "",
		description: "",
		bannerImage: "",
		profileImage: "",
	});

	function handleTitleChange(event) {
		setSpace((prev) => ({
			...prev,
			title: event.target.value,
		}));
	}

	function handleBodyChange(event) {
		setSpace((prev) => ({
			...prev,
			description: event.target.value,
		}));
	}

	function handleSubmit(event) {
		console.log(space);
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
						<div className="create__thread__inputImage">
							<h1>Space banner</h1>
							<input type="file" className="input__image"></input>
						</div>
						<div className="create__thread__inputImage">
							<h1>Space Profile</h1>
							<input type="file" className="input__image"></input>
						</div>

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
