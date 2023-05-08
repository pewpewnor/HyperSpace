import { useContext } from "react";
import UserContext from "contexts/UserContext";
import { findUser } from "utils/find";
import { FaCrown } from "react-icons/fa";
import "./accountinformation.css";
import { useState } from "react";

export default function AccountInformation() {
	const userInfo = useContext(UserContext);
	const [dropdownVisible, setDropdownVisible] = useState(false);

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
					<p className="user-username">{user.name}</p>
				</div>

				<div className="user-subscription-container">
					<p className="user-subscription">{user.subscription}</p>
					<FaCrown className="icon-membership-yellow" />
				</div>
			</div>

			<div className="border"></div>

			<div
				className="navbar-profile-picture-container"
				onMouseEnter={() => setDropdownVisible(true)}
			>
				<img
					src={user.profilePicture}
					alt={user.name}
					className="user-profile-picture"
				></img>
				{dropdownVisible && (
					<div
						className="navbar-account-dropdown"
						onMouseLeave={() => setDropdownVisible(false)}
					>
						<a href="#">My Profile</a>
						<a href="#">Create New Space</a>
						<a href="#">Sign out</a>
					</div>
				)}
			</div>
		</div>
	);
}
