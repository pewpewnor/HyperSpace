import { useContext } from "react";
import UserContext from "contexts/UserContext";
import Space from "./Space";
import { findSpace } from "utils/find";
import "./myspace.css";

export default function MySpace() {
	const { user } = useContext(UserContext);

	const spaceArray = user.joinedSpacesID.map((spaceID) => {
		return findSpace(spaceID);
	});

	const spaces = spaceArray.map((space) => {
		return <Space key={space.ID} {...space} />;
	});

	return (
		<div className="myspace">
			<div className="myspace__top-section">
				<div className="myspace__top-section__border"></div>
				<div className="myspace__top-section__title">My Space</div>
			</div>
			<div className="myspace__space-view-section">{spaces}</div>
			<div className="myspace__button-section">
				<button className="myspace__button-section__discover-button">
					Discover more
				</button>
			</div>
		</div>
	);
}
