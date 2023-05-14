import registerLogo from "images/register.png";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./register.css";

export default function Register() {
	const navigate = useNavigate();
	const [data, setData] = useState({
		username: "",
		email: "",
		password: "",
		privacyPolicy: false,
	});

	const [errors, setErrors] = useState({});

	function eventType(event) {
		return event.target.type === "checkbox"
			? event.target.checked
			: event.target.value;
	}

	function handleChange(event) {
		setData((prev) => ({
			...prev,
			[event.target.name]: eventType(event),
		}));
	}

	async function registerUser() {
		const res = await fetch("http://localhost:3001/api/register", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});
		const resData = await res.json();

		if (resData.error) {
			setErrors({ username: resData.error });
		} else {
			navigate("/login");
		}
	}

	function handleSubmit(event) {
		event.preventDefault();

		let fail = false;
		const errors = {};

		const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;

		if (!data.username.trim()) {
			errors.username = "username is required";
			fail = true;
		}
		if (!data.email.trim()) {
			errors.email = "email is required";
			fail = true;
		}
		if (!data.password.trim()) {
			errors.password = "password is required";
			fail = true;
		}
		if (data.username.length < 3 || data.username.length > 20) {
			errors.username = "username must be 3 - 20 characters";
			fail = true;
		}
		if (!email_pattern.test(data.email)) {
			errors.email = "please enter a valid email address";
			fail = true;
		}
		if (data.password.length < 3 || data.password.length > 20) {
			errors.password = "password  must be 3 - 20 characters";
			fail = true;
		}
		if (data.privacyPolicy === false) {
			errors.privacyPolicy = "must agree to privacy & policy";
			fail = true;
		}

		if (!fail) {
			registerUser();
		} else {
			setErrors(errors);
		}
	}

	return (
		<div className="container">
			<div className="inner__container">
				<div className="inner__container__left">
					<form className="inner__left" onSubmit={handleSubmit}>
						<span className="title">
							regis
							<span className="title__color">ter</span>
						</span>

						<div className="username__email__password__forgot">
							<div className="usernameform__box">
								<div className="username__box">
									<input
										type={"text"}
										placeholder={"username"}
										name="username"
										onChange={handleChange}
									></input>
								</div>
								<div className="errormsg__container">
									{errors.username && (
										<label className="errormsg">
											{errors.username}
										</label>
									)}
								</div>
							</div>
							<div className="emailform__box">
								<div className="email__box">
									<input
										type="text"
										placeholder={"email"}
										name="email"
										onChange={handleChange}
									></input>
								</div>
								<div className="errormsg__container">
									{errors.email && (
										<label className="errormsg">
											{errors.email}
										</label>
									)}
								</div>
							</div>
							<div className="passwordform__box">
								<div className="password__box">
									<input
										type={"password"}
										placeholder={"password"}
										name="password"
										onChange={handleChange}
									></input>
								</div>

								<div className="errormsg__container">
									{errors.password && (
										<label className="errormsg">
											{errors.password}
										</label>
									)}
								</div>
							</div>
						</div>

						<div className="privacypolicy__submit__signuplink">
							<div className="privacypolicy__box">
								<div className="privacypolicy">
									<input
										type={"checkbox"}
										name="privacyPolicy"
										onChange={handleChange}
										checked={data.privacyPolicy}
									></input>
									<span>privacy & policy</span>
								</div>
								{errors.privacyPolicy && (
									<label className="errormsg">
										{errors.privacyPolicy}
									</label>
								)}
							</div>
							<div className="submit__box">
								<div className="submit__box">
									<input type={"submit"}></input>
								</div>
							</div>
							<div className="signuplink__box">
								<div className="signuplink__text">
									<span className="register">
										Already have an account? <br />
										<Link
											to={"/Login"}
											className="Register"
										>
											login here
										</Link>
									</span>
								</div>
							</div>
						</div>
					</form>
				</div>
				<div className="inner__container__right toHidden">
					<img src={registerLogo} alt="register"></img>
				</div>
			</div>
		</div>
	);
}
