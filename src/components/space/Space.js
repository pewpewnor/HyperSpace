import "./space.css";

export default function Space(props) {
	return (
		<div className="space__info__container">
			<div className="space__profile-picture">
				{/* Insert profile picture here */}
			</div>

			<div className="space__data">
				<p className="space__title">{props.name}</p>
				<p className="space__member">6.5M Astronout Joined</p>
			</div>
		</div>
	);
}
