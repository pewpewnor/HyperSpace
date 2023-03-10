import { useContext } from "react";
import UserContext from "contexts/UserContext";
import { findUser } from "utils/find";
import { FaCrown } from "react-icons/fa";

export default function AccountInformation() {
	const userInfo = useContext(UserContext);

	if (!userInfo.isLoggedIn) {
		return (
			<div className="account-information-container">
				<button className="sign-in-button">Login</button>
			</div>
		);
	}

	const user = userInfo.user;

	return (
		<div className="account-information-container">
			<div className="user-information-data-container">
				<div className="user-username-container">
					<p className="user-ast">Ast/</p>
					<p className="user-username">{user.name}</p>
				</div>

				<div className="user-subscription-container">
					<p className="user-subscription">{user.subscription}</p>
					<FaCrown className="icon-membership-yellow" />
				</div>
			</div>

			<div className="border"></div>

			<img
				src={user.profilePicture}
				alt={user.name}
				className="user-profile-picture"
			></img>
		</div>
	);
}
