import "./spaceBanner.css";
import { useState } from "react";

export default function SpaceBanner({ isJoined, spaceData }) {
	const [hasJoined, setHasJoined] = useState(isJoined);

	return (
		<div className="space__banner__container">
			<div className="space__banner__background">
				{" "}
				{/* Insert space banner here, css still not optimized*/}{" "}
			</div>
			<div className="space__banner__data">
				<div className="space__banner__top">
					<div className="space__profile">
						<div className="space__profile-picture">
							{/* Insert profile picture here */}
						</div>

						<div className="space__data">
							{/* Template need fix */}
							<p className="space__title">{spaceData.name}</p>
							<p className="space__member">{spaceData.members}</p>
						</div>
					</div>

					<div className="space__button">
						<button
							className={
								hasJoined
									? "space__button__joined"
									: "space__button__Notjoined"
							}
							onClick={() => setHasJoined(!hasJoined)}
						>
							{hasJoined ? "Joined" : "Join"}
						</button>
					</div>
				</div>

				<div className="space__banner__bottom">
					<p className="space__banner__desc">
						{spaceData.spaceDesctiption}
					</p>
				</div>
			</div>
		</div>
	);
}
