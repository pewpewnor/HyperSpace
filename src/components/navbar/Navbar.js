import { useContext } from "react";
import UserContext from "contexts/UserContext";
import AccountInformation from "./AccountInformation";
import "./navbar.css";
import { FaCrown } from "react-icons/fa";

export default function Navbar() {
	function handleSearch(event) {
		if (event.key === "Enter") {
			alert("User clicked enter");
		}
	}

	function handleCreatePost(e) {
		alert("User wants to create a new thread");
	}

	return (
		<div className="navbar-container">
			<div className="logo-container">
				<img src="assets/hyperspace-logo.png" alt="logo"></img>
				<div className="logo-name-container">
					<h1 id="logo-first">Hyper</h1>
					<h1 id="logo-second">Space</h1>
				</div>
			</div>

			<div className="search-bar-container">
				<div className="search-bar">
					<span>
						<FaCrown />
					</span>
					<input
						className="search-input"
						placeholder="Search anything here..."
						onClick={handleSearch}
					></input>
				</div>
			</div>

			<button className="add-post-container" onClick={handleCreatePost}>
				<p>+</p>
			</button>

			<AccountInformation />
		</div>
	);
}
