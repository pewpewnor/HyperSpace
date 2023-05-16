import shortenNumber from "utils/number";
import "./space.css";

export default function Space(props) {
	return (
		<div className="space__info__container">
			<div className="space__profile-picture">
				{props.picture && (
					<img
						className="space__profile-picture"
						src={props.picture}
						alt="space"
					/>
				)}
			</div>

			<div className="space__data">
				<p className="space__title">{props.name}</p>
				<p className="space__member">
					{shortenNumber(props.members.length) + " Members"}
				</p>
			</div>
		</div>
	);
}
