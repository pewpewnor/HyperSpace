import "./submit.css";

function Submit({ value }) {
	return (
		<div className="submit__box">
			<input type={"submit"} value={value}></input>
		</div>
	);
}

export default Submit;
