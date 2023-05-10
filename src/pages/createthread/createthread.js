import "./createthread.css";
import Navbar from "components/navbar/Navbar";

import InputField from "components/form/inputfield";

export default function CreateThread() {
	return (
		<>
			<Navbar />
			<div className="create__thread__container">
				<div className="create__thread__title">Create New Thread</div>
				<InputField label="Thread Title" />
			</div>
		</>
	);
}
