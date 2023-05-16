import { useState } from "react";
import shortenNumber from "utils/number";
import "./spaceBanner.css";

export default function SpaceBanner({ spaceData }) {
	const [hasJoined, setHasJoined] = useState(false);

	return (
		<div className="space__banner__container">
			{spaceData.bannerPicture && (
				<img
					className="space__banner__background"
					src={spaceData.bannerPicture}
					alt=""
				/>
			)}
			<div className="space__banner__data">
				<div className="space__banner__top">
					<div className="space__profile">
						{spaceData.picture && (
							<img
								className="space__profile-picture"
								src={spaceData.picture}
								alt=""
							/>
						)}

						<div className="space__data">
							<p className="space__title">{spaceData.name}</p>
							<p className="space__member">
								{shortenNumber(spaceData.members.length) +
									" Members"}
							</p>
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
						{spaceData.description}
					</p>
				</div>
			</div>
		</div>
	);
}
