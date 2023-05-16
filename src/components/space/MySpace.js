import UserContext from "contexts/UserContext";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Space from "./Space";
import "./myspace.css";

export default function MySpace() {
	const [user] = useContext(UserContext);

	const [joinedSpaces, setJoinedSpaces] = useState([]);

	useEffect(() => {
		async function getSpaces() {
			let spaces = [];

			try {
				const resSpaces = await fetch(
					"http://localhost:3001/api/user/myspace",
					{
						method: "POST",
						headers: {
							Accept: "application/json",
							"Content-Type": "application/json",
						},
						body: JSON.stringify({ ...user, userID: user._id }),
					}
				);
				if (!resSpaces.ok) {
					return;
				}
				spaces = await resSpaces.json();
			} catch (error) {}

			setJoinedSpaces(
				spaces.map((space) => {
					return <Space key={space._id} {...space} />;
				})
			);
		}

		getSpaces();
	}, [user]);

	return (
		<div className="myspace">
			<div className="myspace__top-section">
				<div className="myspace__top-section__border"></div>
				<div className="myspace__top-section__title">My Space</div>
			</div>
			<div className="myspace__space-view-section">{joinedSpaces}</div>
			<div className="myspace__button-section">
				<Link to="/discover">
					<button className="myspace__button-section__discover-button">
						Discover more
					</button>
				</Link>
			</div>
		</div>
	);
}
