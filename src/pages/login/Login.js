import loginLogo from "images/login.png";
import { useState } from "react";
import loginValidation from "./Validation";
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
		console.log(data);
	}

	function handleRememberMe() {
		setData((prev) => ({ ...prev, rememberMe: !prev.rememberMe }));
	}

	function handleSubmit(event) {
		event.preventDefault();
		console.log(data);
		console.log(loginValidation(data));
		setErrors(loginValidation(data));
	}

	return (
		<div className="container">
			<div className="inner__container">
				<div className="inner__container__left">
					<img src={loginLogo} alt="login"></img>
				</div>
				<div className="inner__container__right">
					<form className="inner__right" onSubmit={handleSubmit}>
						<span className="title">
							log
							<span className="title__color">in</span>
						</span>

						<div className="email__password__forgot">
							<div className="emailform__container">
								<input
									className="email__box"
									type="email"
									placeholder={"email"}
									onChange={handleChange}
								>
									{errors.email && (
										<span className="errormsg">
											{errors.email}
										</span>
									)}
								</input>
							</div>

							<div className="passwordform__container">
								<input
									className="password__box"
									type={"password"}
									placeholder={"password"}
									onChange={handleChange}
								>
									{errors.password && (
										<span style={{ color: "red" }}>
											{errors.password}
										</span>
									)}
								</input>
							</div>
						</div>

						<div className="rememberme__submit__signuplink">
							<div className="rememberme__container">
								<input
									className="rememberme__box"
									type="checkbox"
									onChange={handleRememberMe}
								></input>
								<span className="rememberme__span">
									Remember me
								</span>
							</div>
							<div className="submit__container">
								<input
									className="submit__box"
									type={"submit"}
									placeholder={"submit"}
									href=""
								></input>
							</div>
							<div className="signuplink__container">
								<span>Already have an account?</span>
								<br />
								<button>Sign up here...</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Login;
