import UserContext from "contexts/UserContext";
import loginLogo from "images/login.png";
import Cookies from "js-cookie";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";

function Login() {
	const navigate = useNavigate();
	const [setUser] = useContext(UserContext);
	const [data, setData] = useState({
		username: "",
		password: "",
		rememberMe: false,
	});

	const [errors, setErrors] = useState({});

	useEffect(() => {
		const cookie = Cookies.get("hyperspace-data");
		if (cookie) {
			const { username, password } = JSON.parse(cookie);
			if (username !== undefined && password !== undefined) {
				setData({ username: username, password: password });
			}
		}
	}, []);

	function handleChange(event) {
		setData((prev) => ({
			...prev,
			[event.target.name]: event.target.value,
		}));
	}

	function handleRememberMe() {
		setData((prev) => ({ ...prev, rememberMe: !prev.rememberMe }));
	}

	async function checkLoginCredential() {
		const res = await fetch("http://localhost:3000/api/login", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});
		const resData = await res.json();

		if (resData.error) {
			setErrors({
				username: "username or password is wrong",
				password: "username or password is wrong",
			});
		} else {
			if (data.rememberMe) {
				Cookies.set("hyperspace-data", JSON.stringify(resData), {
					expires: 1,
					path: "",
					sameSite: "strict",
				});
			}

			setUser(resData);
			navigate("/");
		}
	}

	function handleSubmit(event) {
		event.preventDefault();

		let fail = false;
		const errors = {};

		if (data.username.length < 1) {
			errors.username = "username is required";
			fail = true;
		}
		if (data.password.length < 1) {
			errors.password = "password is required";
			fail = true;
		}

		if (!fail) {
			checkLoginCredential();
		} else {
			setErrors(errors);
		}
	}

	return (
		<div className="login-register-container">
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
									value={data.username}
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
									value={data.password}
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
