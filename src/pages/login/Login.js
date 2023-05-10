import Signuplink from "components/form/signuplink";
import loginLogo from "images/login.png";
import { useState } from "react";
import Validation from "./Validation";
import "./login.css";

function Login() {
	const [data, setData] = useState({
		email: "",
		password: "",
		rememberMe: false,
	});

	const [errors, setErrors] = useState({});

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

	function handleValidation(event) {
		event.preventDefault();
		setErrors(Validation(data));
	}

	return (
		<div className="container">
			<div className="inner__container">
				<div className="inner__container__left">
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
								<div className="email__box">
									<input
										type="email"
										placeholder={"email"}
										onChange={handleChange}
									>
										{errors.email && (
											<p style={{ color: "red" }}>
												{errors.email}
											</p>
										)}
									</input>
								</div>
							</div>

							<div className="passwordform__container">
								<div className="password__box">
									<input
										type={"password"}
										placeholder={"password"}
										onChange={handleChange}
									>
										{errors.password && (
											<p>{errors.password}</p>
										)}
									</input>
								</div>
							</div>
						</div>

						<div className="rememberme__submit__signuplink">
							<div className="rememberme__container">
								<div className="rememberme">
									<input
										onChange={handleRememberMe}
										type={"checkbox"}
									></input>
									<span>Remember me</span>
								</div>
							</div>
							<div className="submit__container">
								<div className="submit__box">
									<input
										type={"submit"}
										placeholder={"submit"}
										onSubmit={handleValidation}
									></input>
								</div>
							</div>
							<div className="signuplink__container">
								<div className="signuplink__text">
									<span className="login">
										New to HyperSpace? <br />
										<a href="" className="Login">
											register here
										</a>
									</span>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Login;
