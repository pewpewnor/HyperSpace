import { useState } from "react";
import "./login.css";
import loginLogo from "images/login.png";

import Emailform from "components/form/emailform";
import Passwordform from "components/form/passwordform";
import Rememberme from "components/form/rememberme";
import Submit from "components/form/submit";
import Signuplink from "components/form/signuplink";

function Login() {
	const [data, setData] = useState({
		email: "",
		password: "",
		rememberMe: false,
	});

	function handleChange(event) {
		setData((prev) => ({
			...prev,
			[event.target.name]: event.target.value,
		}));
	}

	function handleRememberMe() {
		setData((prev) => ({ ...prev, rememberMe: !prev.rememberMe }));
	}

	function handleSubmit() {
		console.log(data);
	}

	return (
		<div className="container">
			<div className="inner__container">
				<div className="inner__container__left toHidden">
					<img src={loginLogo} alt="login"></img>
				</div>
				<div className="inner__container__right">
					<form className="inner__right">
						<span className="title">
							log
							<span className="title__color">in</span>
						</span>

						<div className="email__password__forgot">
							<div className="emailform__container">
								<Emailform onChange={handleChange} />
							</div>

							<div className="passwordform__container">
								<Passwordform />
							</div>
						</div>

						<div className="rememberme__submit__signuplink">
							<div className="rememberme__container">
								<Rememberme />
							</div>
							<div className="submit__container">
								<Submit value="login" />
							</div>
							<a
								href="#temporary"
								className="signuplink__container"
							>
								<Signuplink className={"login"} />
							</a>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Login;
