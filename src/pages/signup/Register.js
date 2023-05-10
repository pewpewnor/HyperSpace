import "./register.css";

import registerLogo from "images/register.png";

export default function Register() {
	// return(

	//     <div className="container">

	//         <div className="register-box">

	//             <div className="header">
	//                 <div className="title">Register</div>
	//             </div>
	//             <div className="bottom">

	//                 <Usernameform></Usernameform>
	//                 <Emailform className=""></Emailform>
	//                 <Passwordform className=""></Passwordform>

	//             </div>

	//         </div>

	//     </div>

	// );

	let link = "";

	return (
		<div className="container">
			<div className="inner__container">
				<div className="inner__container__left">
					<form className="inner__left">
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
									></input>
								</div>
							</div>
							<div className="emailform__box">
								<div className="email__box">
									<input
										type="email"
										placeholder={"email"}
									></input>
								</div>
							</div>
							<div className="passwordform__box">
								<div className="password__box">
									<input
										type={"password"}
										placeholder={"password"}
									></input>
								</div>
							</div>
						</div>

						<div className="privacypolicy__submit__signuplink">
							<div className="privacypolicy__box">
								<div className="privacypolicy">
									<input type={"checkbox"}></input>
									<span>privacy & policy</span>
								</div>
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
										<a href="" className="register">
											{link}
										</a>
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
