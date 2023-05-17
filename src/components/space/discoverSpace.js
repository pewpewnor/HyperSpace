import { useNavigate } from "react-router-dom";
import shortenNumber from "utils/number";
import "./discoverSpace.css";

export default function DiscoverPageSpaceComponent(props) {
	const navigate = useNavigate();
	return (
		<div className="discoverPage__spaceComponent__container">
			<div className="discoverPage__spaceComponent__wallpaper"></div>

			<div className="discoverPage__spaceComponent__spaceData__container">
				<div className="discoverPage__spaceComponent__spaceData__top flex">
					<div className="discoverPage__spaceComponent__spaceData__top__spaceProfile flex">
						{/* <div className="discoverPage__spaceComponent__spaceData__top__spaceProfile__profilePicture"></div> */}
						<img
							className="discoverPage__spaceComponent__spaceData__top__spaceProfile__profilePicture"
							src={props.picture}
							alt=""
						></img>
						<div className="discoverPage__spaceComponent__spaceData__top__spaceProfile__data">
							<h2>{props.name}</h2>
							<p>
								{shortenNumber(props.members.length) +
									" Members"}
							</p>
						</div>
					</div>
					<button
						className="button__default"
						onClick={() => {
							navigate("/space/" + props.name);
						}}
					>
						Go to space
					</button>
				</div>
				<div className="discoverPage__spaceComponent__spaceData__bottom">
					<p>{props.description}</p>
				</div>
			</div>
		</div>
	);
}
