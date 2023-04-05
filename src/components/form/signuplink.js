import "./signuplink.css";

function Signuplink({ className }) {
	let text,
		link,
		text_design,
		link_design = "";

	if ({ className } === "Login") {
		text = "New to hyperSpace?";
		link = "Sign up here....";
		text_design = "Login";
		link_design = "Login";
	} else {
		text = "Already have an account?";
		link = "Login here....";
		text_design = "Register";
		link_design = "Register";
	}

	return (
		<div className="text">
			<span className={text_design}>
				{text} <br />
				<a href="" className={link_design}>
					{link}
				</a>
			</span>
		</div>
	);
}

export default Signuplink;
