import ChildComment from "components/comment/ChildComment";
import Comment from "components/comment/Comment";
import { useEffect, useState } from "react";
import { AiOutlineShareAlt } from "react-icons/ai";
import { FaCrown, FaRegCommentAlt } from "react-icons/fa";
import { RiRocket2Line } from "react-icons/ri";
import { TbClock } from "react-icons/tb";
import { getMomentFrom } from "utils/date";
import shortenNumber from "utils/number";
import ThreadText from "./ThreadText";
import "./thread.css";

export default function Thread(props) {
	const [popup, setPopup] = useState(false);
	const [comments, setComments] = useState([]);

	useEffect(() => {
		async function getComments() {
			const res = await fetch(
				"http://localhost:3000/api/comments?threadID=" + props._id
			);
			if (!res.ok) return;
			const resData = await res.json();

			setComments(
				resData.comments.map((comment) => (
					<Comment
						key={comment._id}
						{...comment}
						childComments={comment.childComments.map(
							(childComment) => (
								<ChildComment
									key={childComment._id}
									{...childComment}
								/>
							)
						)}
					/>
				))
			);
		}

		if (popup) {
			getComments();
		}
	}, [props._id, popup]);

	const user = props.authorID;
	const moment = getMomentFrom(new Date(props.postDate));
	const views = shortenNumber(props.views.length);
	const upvotes = shortenNumber(props.upvotes.length);
	const downvotes = shortenNumber(props.downvotes.length);

	const commentNumbers =
		props.comments.length > comments.length
			? shortenNumber(props.comments.length)
			: shortenNumber(comments.length);

	function handleUpvote() {}

	function handleDownvote() {}

	const handleComment = () => {
		setPopup((prev) => !prev);
	};

	function handleShare() {}

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
							{props.space.name + " / #" + props.channel.name}
						</p>
						<div className="thread__profile__username__container">
							<FaCrown className="thread__profile__subscription" />
							<p className="thread__profile__username">
								{user.username}
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
							alt=""
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
						<p className="thread__buttons__value">
							{commentNumbers}
						</p>
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

			{popup && comments && (
				<div className="popupthread__comment__container">
					<label>Comment as {user.username}</label>
					<div className="popupthread__user__comment__container">
						<img
							src={user.profilePicture}
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
						{comments}
					</div>
				</div>
			)}
		</div>
	);
}
