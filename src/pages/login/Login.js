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
			<div className="login__container">
				<span className="title"><span className="title__color">log</span>in</span>
				
				<div className="email__password__forgot">
					<div className="emailform__box">
						
					</div>
					<div className="passwordform__box">

					</div>
					<div className="forgotpassword__box">

					</div>
				</div>

				<div className="rememberme__submit__signuplink">
					<div className="rememberme__box">

					</div>
					<div className="submit__box">

					</div>
					<div className="signuplink__box">

					</div>
				</div>
			</div>
		</div>
	);
}

export default Login;
