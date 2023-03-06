import { useContext } from "react";
import ThreadText from "./ThreadText";
import LocationContext from "contexts/LocationContext";
import { findUser } from "utils/find";
import { getMomentFrom } from "utils/date";
import shortenNumber from "utils/number";
import { FaCrown, FaRegCommentAlt } from "react-icons/fa";
import { RiRocket2Line } from "react-icons/ri";
import { TbClock } from "react-icons/tb";
import {AiOutlineShareAlt} from "react-icons/ai"
import "./thread.css";

export default function Thread(props) {
	const {
		currentLocation: { space, channel },
	} = useContext(LocationContext);

	const user = findUser(props.userID);
	const moment = getMomentFrom(new Date(props.postDate));
	const views = shortenNumber(props.views);
	const pictures = props.pictures.map((url) => (
		<img
			key={url}
			className="thread__content__pictures__image"
			src={url}
			alt="something for content"
		/>
	));
	const upvotes = shortenNumber(props.upvote);
	const downvotes = shortenNumber(props.downvote);
	const comments = shortenNumber(props.comments);

	function handleUpvote() {}

	function handleDownvote() {}

	function handleComment() {}

	function handleShare(){}

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
							{space.name + " / #" + channel.name}
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
					<div className="thread__info__views">{views} views</div>
				</div>
			</div>

			<div className="thread__content">
				<div className="thread__content__title__container">
					<div className="border"></div>
					<h2 className="thread__content__title">{props.title}</h2>
				</div>
				<div>
					<ThreadText text={props.text} />
				</div>
				<div className="thread__content__pictures">{pictures}</div>
			</div>

			<div className="thread__buttons__container">
				<div className="thread__buttons">
					<button
						className="thread__buttons__upvote"
						onClick={handleUpvote}
					>
						<RiRocket2Line className="thread__buttons__upvote__icon thread__buttons__icons" />
						<p className="thread__buttons__value">
							{upvotes}
						</p>
					</button>
					<button
						className="thread__buttons__downvote"
						onClick={handleDownvote}
					>
						<RiRocket2Line className="thread__buttons__downvote__icon thread__buttons__icons" />
						<p className="thread__buttons__value">{downvotes}</p>
						
					</button>
					<button
						className="thread__buttons__comment"
						onClick={handleComment}
					>
						<FaRegCommentAlt className="thread__buttons__comment__icon thread__buttons__icons" />
						<p className="thread__buttons__value">{comments}</p>
						
					</button>

					<button
						className="thread__buttons__share"
						onClick={handleShare}
					>
						<AiOutlineShareAlt className="thread__buttons__share__icon thread__buttons__icons" />
						<p className="thread__buttons__value">Share</p>
						
					</button>

				</div>
			</div>
		</div>
	);
}
