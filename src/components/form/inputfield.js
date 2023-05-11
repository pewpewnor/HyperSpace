import "./inputfield.css";

function InputField(props) {
	return (
		<div className="inputField__container">
			<div className="inputField__label">{props.label}</div>
			<textarea
				className={props.type}
				onChange={props.handleChange}
			></textarea>
		</div>
	);
}

export default InputField;
