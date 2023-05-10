import "./inputfield.css";

function InputField(props) {
	return (
		<div className="inputField__container">
			<div className="inputField__label">{props.label}</div>
			<textarea className="inputField__textArea"></textarea>
		</div>
	);
}

export default InputField;
