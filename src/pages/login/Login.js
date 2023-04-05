import { useState } from "react";
import "./login.css";

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
			<div className="login__container">
				<span className="title">
					<span className="title__color">log</span>in
				</span>

				<div className="email__password__forgot">
					<div className="emailform__box">
						<input
							type="email"
							name="email"
							placeholder="email"
							onChange={handleChange}
						/>
					</div>
					<div className="passwordform__box">
						<input
							type="password"
							name="password"
							placeholder="password"
							onChange={handleChange}
						/>
					</div>
					{/* <div className="forgotpassword__box"></div> */}
				</div>

				<div className="rememberme__submit__signuplink">
					<div className="rememberme__box">
						<input
							type="checkbox"
							name="rememberMe"
							onChange={handleRememberMe}
						/>
						remember me
					</div>
					<div className="submit__box">
						<button onClick={handleSubmit}>Login</button>
					</div>
					<a href="#temporary" className="signuplink__box">
						sign up instead
					</a>
				</div>
			</div>
		</div>
	);
}

export default Login;
