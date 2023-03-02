import AccountInformation from "./AccountInformation";
import "./navbar.css";
import {FaSearch} from "react-icons/fa";
import { useState } from "react";

export default function Navbar() {
	const [searchQuery, setSearchQuery] = useState("");

	function handleSearchQuery(event) {
		setSearchQuery(event.target.value);
	}
	
	function handleSearchQueryEnter(event) {
		if (event.key === "Enter") {
			console.log(searchQuery);
		}
	} 

	function handleCreatePost() {
		alert("User wants to create a new thread");
	}

	return (
		<div className="navbar">
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
							<FaSearch className="search-icon" />
						</span>
						<input
							className="search-input"
							name="searchQuery"
							placeholder="Search anything here..."
							value={searchQuery}
							onChange={handleSearchQuery}
							onKeyDown={handleSearchQueryEnter}
						></input>
					</div>
				</div>

				<button className="add-post-container" onClick={handleCreatePost}>
					<p>+</p>
				</button>

				<AccountInformation />
			</div>
		</div>
	);
}
