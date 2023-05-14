import AccountInformation from "./AccountInformation";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
	const [searchQuery, setSearchQuery] = useState("");

	function handleSearchQuery(event) {
		setSearchQuery(event.target.value);
	}

	function handleSearchQueryEnter(event) {
		if (event.key === "Enter") {
			alert("User wants to search: " + searchQuery);
		}
	}

	function handleSearchIcon() {
		alert(searchQuery);
	}

	return (
		<div className="navbar">
			<div className="navbar-container">
				<Link to="/" className="logo-container">
					<img src="assets/hyperspace-logo.png" alt="logo"></img>
					<div className="logo-name-container">
						<h1 id="logo-first">Hyper</h1>
						<h1 id="logo-second">Space</h1>
					</div>
				</Link>

				<div className="search-bar-container">
					<div className="search-bar">
						<input
							className="search-input"
							name="searchQuery"
							placeholder="Search anything here..."
							value={searchQuery}
							onChange={handleSearchQuery}
							onKeyDown={handleSearchQueryEnter}
						></input>
						<span onClick={handleSearchIcon}>
							<FaSearch className="search-icon" />
						</span>
					</div>
				</div>

				<Link to="/create-thread" className="add-post-container">
					<p>+</p>
				</Link>

				<AccountInformation />
			</div>
		</div>
	);
}
