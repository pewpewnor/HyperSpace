import "./createthread.css";
import Navbar from "components/navbar/Navbar";

import InputField from "components/form/inputfield";

export default function CreateThread() {
	return (
		<>
			<Navbar />
			<div className="create__thread__container">
				<div className="create__thread__title">Create New Thread</div>
				<div className="create__thread__inputField__container">
					<InputField label="Thread Title" type="inputField__title" />
					<InputField label="Body" type="inputField__body" />
				</div>
			</div>
		</>
	);
}
