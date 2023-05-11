import "./submitBtn.css";

export default function SubmitBtn({ name, onClick }) {
	return (
		<button className="submitButton" onClick={onClick}>
			{name}
		</button>
	);
}
