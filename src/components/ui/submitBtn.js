import "./submitBtn.css";

export default function SubmitBtn({ name, onClick }) {
	function handleClick(event) {
		event.stopPropagation();
		onClick();
	}

	return (
		<button className="submitButton" onClick={handleClick}>
			{name}
		</button>
	);
}
