import { useState } from "react";
import { AiOutlineShareAlt } from "react-icons/ai";
import { FaCrown, FaRegCommentAlt } from "react-icons/fa";
import { RiRocket2Line } from "react-icons/ri";
import { TbClock } from "react-icons/tb";
import { getMomentFrom } from "utils/date";
import shortenNumber from "utils/number";
import ChildComment from "../comment/ChildComment";
import Comment from "../comment/Comment";
import ThreadText from "./ThreadText";
import "./thread.css";

export default function Thread(props) {
	const moment = getMomentFrom(new Date(props.postDate));
	const views = shortenNumber(props.views.length);

	const [popup, setPopup] = useState(false);

	const upvotes = shortenNumber(props.upvotes.length);
	const downvotes = shortenNumber(props.downvotes.length);
	const comments = shortenNumber(props.comments.length);

	const childComment = [
		<ChildComment
			postDate={1677764208799}
			text={"wut?"}
			userID={"USR003"}
		/>,
		<ChildComment
			postDate={1677764208779}
			text={"hahhhhh"}
			userID={"USR003"}
		/>,
		<ChildComment
			postDate={1677764208769}
			text={"maksudnya"}
			userID={"USR003"}
		/>,
	];

	function handleUpvote() {}

	function handleDownvote() {}

	const handleComment = () => {
		setPopup(!popup);
	};

	function handleShare() {}

	return (
		<div className="thread__container">
			<div className="thread__container__top">
				<div className="thread__profile__container">
					<img
						src={props.user.profilePicture}
						alt="something for user profile"
					/>
					<div className="thread__profile">
						<p className="thread__profile__spacename">
							{props.space.name + " / #" + props.channel.name}
						</p>
						<div className="thread__profile__username__container">
							<FaCrown className="thread__profile__subscription" />
							<p className="thread__profile__username">
								{props.user.name}
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
				<div className="thread__content__pictures">
					{props.picture && (
						<img
							className="thread__content__pictures__image"
							src={props.picture}
							alt="something for content"
						/>
					)}
				</div>
			</div>

			<div className="thread__buttons__container">
				<div className="thread__buttons">
					<button
						className="thread__buttons__upvote"
						onClick={handleUpvote}
					>
						<RiRocket2Line className="thread__buttons__upvote__icon thread__buttons__icons" />
						<p className="thread__buttons__value">{upvotes}</p>
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

			{popup && (
				<div className="popupthread__comment__container">
					<label>Comment as {props.user.name}</label>
					<div className="popupthread__user__comment__container">
						<img
							src={props.user.profilePicture}
							alt="something for user profile"
						/>
						<input
							className="popupthread__user__comment__text"
							placeholder="What are your thought about this post?"
							type={"text"}
						/>
						<button className="popupthread__user__submit__comment">
							submit
						</button>
					</div>
					<div className="popupthread__blackline"></div>
					<div className="popupthread__commentlist__container">
						<Comment
							// space={spaceData[0]}
							// channel={channelData[0]}
							postDate={1677764208799}
							text={
								"aku ga mau aku mau tapi ga maukamu siapa afjas afknvvnd askfdjhife ifjdf difdifj"
							}
							childComment={childComment}
							userID={"USR001"}
						/>
						<Comment
							// space={spaceData[0]}
							// channel={channelData[0]}
							postDate={1677764208769}
							text={"aku ga mau"}
							childComment={childComment}
							userID={"USR001"}
						/>
						<Comment
							// space={spaceData[0]}
							// channel={channelData[0]}
							postDate={1677764208759}
							text={"aku ga mau"}
							childComment={childComment}
							userID={"USR001"}
						/>
					</div>
				</div>
			)}
		</div>
	);
}
