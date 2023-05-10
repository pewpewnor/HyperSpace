import "./inputfield.css";
import { useState } from "react";

function InputField(props) {
	const [text, setText] = useState("");

	function handleChange(e) {
		setText(e.target.value);
	}

	return (
		<div className="inputField__container">
			<div className="inputField__label">{props.label}</div>
			<textarea className={props.type} onChange={handleChange}></textarea>
		</div>
	);
}

export default InputField;
