import "./Navbar-style.css"; // Importing styles
import { Icon } from "@iconify/react";

function AccountInformation({ User, isLogin }) {
	let iconMembership;
	// ntar harus ditambahin rank lain
	if (User.subscription === "Milky Way Astronout") {
		iconMembership = "icon-membership-yellow";
	}

	if (isLogin) {
		return (
			<div className="account-information-container">
				<div className="user-information-data-container">
					<div className="user-username-container">
						<p className="user-ast">ast/</p>
						<p className="user-username">{User.id}</p>
					</div>

					<div className="user-subscription-container">
						<p className="user-subscription">{User.subscription}</p>
						<Icon
							icon="ph:crown-simple-fill"
							className={iconMembership}
						/>
					</div>
				</div>

				<div className="border"></div>

				{/* Help fix*/}
				<div className="user-profilePicture">
					{/* <img src={link} alt='photo'></img> */}
				</div>
			</div>
		);
	} else {
		return <button className="sign-in-button">Sign in</button>;
	}
}

export default function Navbar({ User, isLogin }) {
	function handleSearch(event) {
		if (event.key === "Enter") {
			// Placeholder
			alert("User clicked enter");
		}
	}

	function handleCreatePost(e) {
		// Placeholder
		alert("User wants to create a new thread");
	}

	return (
		<div className="navbar-container">
			<div className="logo-container">
				<img src={"/assets/hyperspace-logo.png"} alt="logo"></img>
				<div className="logo-name-container">
					<h1 id="logo-first">Hyper</h1>
					<h1 id="logo-second">Space</h1>
				</div>
			</div>

			<div className="search-bar-container">
				<div className="search-bar">
					<span>
						<Icon
							icon="ic:baseline-search"
							className="search-icon"
						/>
					</span>
					<input
						className="search-input"
						placeholder="Search anything here..."
						onKeyDown={handleSearch}
					></input>
				</div>
			</div>

			<button className="add-post-container" onClick={handleCreatePost}>
				<p>+</p>
			</button>

			<AccountInformation isLogin={isLogin} User={User} />
		</div>
	);
}
