import { getMomentFrom } from "utils/date.js";
import { findUser, findSpace } from "utils/find";
import { FaCrown } from "react-icons/fa";
import "./thread-style.css";
import { TbClock } from "react-icons/tb";

export default function Thread(props) {
	const moment = getMomentFrom(new Date(props.postDate));
	const pictures = props.pictures.map((url) => (
		<img
			key={url}
			className="thread__content__pictures__image"
			src={url}
			alt="something for content"
		/>
	));

	const space = findSpace(props.spaceID);
	const user = findUser(props.userID);

	return (
		<div className="thread__container">
			<div className="thread__container__top">
				<div className="thread__profile__container">
					<img
						src={user.profilePicture}
						alt="something for user profile"
					/>
					<div className="thread__profile">
						<p className="thread__profile__spacename">
							{space.name}
						</p>
						<div className="thread__profile__username__container">
							<FaCrown className="thread__profile__subscription" />
							<p className="thread__profile__username">
								{user.name}
							</p>
						</div>
					</div>
				</div>

				<div className="thread__info">
					<div className="thread__info__date__container">
						<TbClock className="thread__info__date__icon" />
						<div className="thread__info__date">
							Posted {moment}
						</div>
					</div>
					<div className="thread__info__views">
						{props.views} views
					</div>
				</div>
			</div>

			<div className="thread__content">
				<div className="thread__content__title__container">
					<div className="border"></div>
					<h2 className="thread__content__title">{props.title}</h2>
				</div>
				<p className="thread__content__text">{props.text}</p>
				<div className="thread__content__pictures">{pictures}</div>
			</div>
		</div>
	);
}
