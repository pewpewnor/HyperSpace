import UserContext from "contexts/UserContext";
import { useContext, useState } from "react";
import { FaCrown } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./accountinformation.css";

export default function AccountInformation() {
	const [user] = useContext(UserContext);
	const [dropdownVisible, setDropdownVisible] = useState(false);

	if (!user) {
		return (
			<div className="account-information-container">
				<Link to="/login">
					<button className="sign-in-button">Login</button>
				</Link>
			</div>
		);
	}

	return (
		<div className="account-information-container">
			<div className="user-information-data-container">
				<div className="user-username-container">
					<p className="user-username">{user.username}</p>
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
					alt=""
					className="user-profile-picture"
				></img>
				{dropdownVisible && (
					<div
						className="navbar-account-dropdown"
						onMouseLeave={() => setDropdownVisible(false)}
					>
						<Link to="/profile" className="more__navbar">
							My Profile
						</Link>
						<Link to="/create-space" className="more__navbar">
							Create New Space
						</Link>
						<Link to="/login" className="more__navbar">
							Sign out
						</Link>
					</div>
				)}
			</div>
		</div>
	);
}
