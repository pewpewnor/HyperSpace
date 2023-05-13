import "./inputfield.css";

function InputField(props) {
	function handleChange(event) {
		event.stopPropagation();
		props.handleChange(event);
	}

	return (
		<div className="inputField__container">
			<div className="inputField__label">{props.label}</div>
			<textarea className={props.type} onChange={handleChange}></textarea>
		</div>
	);
}

export default InputField;
