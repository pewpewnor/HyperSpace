import loginLogo from "images/login.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";
import loginValidation from "./loginValidation";

function Login() {
	const [data, setData] = useState({
		username: "",
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

						<div className="username__password__forgot">
							<div className="usernameform__container">
								<input
									className="username__box"
									type="text"
									placeholder={"username"}
									name="username"
									onChange={handleChange}
								/>
								<br />
								<div className="errormsg__container">
									{errors.username && (
										<label className="errormsg">
											{errors.username}
										</label>
									)}
								</div>
							</div>

							<div className="passwordform__container">
								<input
									className="password__box"
									type={"password"}
									placeholder={"password"}
									name="password"
									onChange={handleChange}
								/>
								<div className="errormsg__container">
									{errors.password && (
										<label className="errormsg">
											{errors.password}
										</label>
									)}
								</div>
								<br />
							</div>
						</div>

						<div className="rememberme__submit__signuplink">
							<div className="rememberme__container">
								<input
									className="rememberme__box"
									type="checkbox"
									onChange={handleRememberMe}
								/>
								<span className="rememberme__span">
									Remember me
								</span>
							</div>
							<div className="submit__container">
								<input
									className="submit__box"
									type="submit"
									placeholder="submit"
									href=""
								/>
							</div>
							<div className="signuplink__container">
								<span>Already have an account?</span>
								<br />
								<Link to="/register">Sign up here...</Link>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Login;
