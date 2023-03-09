import Emailform from "../../components/form/emailform"
import Passwordform from "../../components/form/passwordform"
import Forgotpassword from "../../components/form/forgotpassword"
import Rememberme from "../../components/form/rememberme"
import Submit from "../../components/form/submit"
import Signuplink from "../../components/form/signuplink"
import "./login.css";

function Login() {
	return (
		<div className="container">
			<span className="title"><span className="title__color">log</span>in</span>
			<Emailform />
			<Passwordform />
			<Forgotpassword />
			<Rememberme />
			<Submit />
			<Signuplink />
		</div>
	);
}

export default Login;
