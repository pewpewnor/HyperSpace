import "./NotFound.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function NotFound() {
	const logoImg = process.env.PUBLIC_URL + "assets/hyperspace-logo.png";

	const currentPage = useLocation();

	useEffect(() => {
		document.title = "404 Not Found";

		return () => {
			document.title = "Hyperspace";
		};
	}, []);

	useEffect(() => {
		document.title = "404 Not Found";
	}, [currentPage]);

	return (
		<div className="container">
			<h1>
				<span className="header-textSpan">4</span>0
				<span className="header-textSpan">4</span> Page Does not Exist
			</h1>

			<p>
				This page isn't available. Sorry about that.
				<br></br>
				Try searching for something else
			</p>

			<div className="subcontainer">
				<Link to="/">
					<h2>Head back to home</h2>
				</Link>
				<img className="logoImg" src={logoImg} alt="Hyperspace Logo" />
			</div>
		</div>
	);
}
