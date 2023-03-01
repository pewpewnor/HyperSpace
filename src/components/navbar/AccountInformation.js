import { useContext } from "react";
import UserContext from "contexts/UserContext";
import { findUser } from "utils/find";
import { FaCrown } from "react-icons/fa";

export default function AccountInformation() {
	const userInfo = useContext(UserContext);

	if (!userInfo.isLoggedIn) {
		return <button className="sign-in-button">Login</button>;
	}

	const user = findUser(userInfo.userID);

	return (
		<div className="account-information-container">
			<div className="user-information-data-container">
				<div className="user-username-container">
					<p className="user-username">{user.name}</p>
				</div>

				<div className="user-subscription-container">
					<p className="user-subscription">{user.subscription}</p>
					<FaCrown />
				</div>
			</div>

			<div className="border"></div>

			<div className="user-profilePicture">
				{/* <img src={user.profilePicture} alt="photo"></img> */}
				<img src="#" alt="photo"></img>
			</div>
		</div>
	);
}
