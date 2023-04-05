import Emailform from "components/form/emailform";
import Forgotpassword from "components/form/forgotpassword";
import Passwordform from "components/form/passwordform";
import Privacypolicy from "components/form/privacypolicy";
import privacypolicy from "components/form/privacypolicy";
import Submit from "components/form/submit";
import Usernameform from "components/form/usernameform";
import Signuplink from "components/form/signuplink";
import "./register.css";

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

	return (
		<div className="container">
			<div className="register__container">
				<span className="title">Register</span>

				<div className="username__email__password__forgot">
					<div className="usernameform__box">
						<Usernameform></Usernameform>
					</div>
					<div className="emailform__box">
						<Emailform></Emailform>
					</div>
					<div className="passwordform__box">
						<Passwordform></Passwordform>
					</div>
				</div>

				<div className="privacypolicy__submit__signuplink">
					<div className="privacypolicy__box">
						<Privacypolicy></Privacypolicy>
					</div>
					<div className="submit__box">
						<Submit value="Sign up"></Submit>
					</div>
					<div className="signuplink__box">
						<Signuplink className={"register"}></Signuplink>
					</div>
				</div>
			</div>
		</div>
	);
}
