import { useNavigate } from "react-router-dom";
import shortenNumber from "utils/number";
import "./space.css";

export default function Space(props) {
	const navigate = useNavigate();

	return (
		<div
			className="space__info__container"
			onClick={() => {
				navigate("/space/" + props.name);
			}}
		>
			<div className="space__profile-picture">
				{props.picture && (
					<img
						className="space__profile-picture"
						src={props.picture}
						alt=""
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
