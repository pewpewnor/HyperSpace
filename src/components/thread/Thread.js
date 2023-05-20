import ChildComment from "components/comment/ChildComment";
import Comment from "components/comment/Comment";
import UserContext from "contexts/UserContext";
import { useContext, useEffect, useState } from "react";
import { AiOutlineShareAlt } from "react-icons/ai";
import { FaCrown, FaRegCommentAlt } from "react-icons/fa";
import { RiRocket2Line } from "react-icons/ri";
import { TbClock } from "react-icons/tb";
import { getMomentFrom } from "utils/date";
import shortenNumber from "utils/number";
import ThreadText from "./ThreadText";
import "./thread.css";

export default function Thread(props) {
	const [user] = useContext(UserContext);
	const [popup, setPopup] = useState(false);
	const [comments, setComments] = useState([]);

	const [status, setStatus] = useState({
		upvotes: props.upvotes,
		downvotes: props.downvotes,
		views: props.views,
		comments: props.comments,
	});
	const [commentText, setCommentText] = useState("");

	useEffect(() => {
		async function getComments() {
			const res = await fetch(
				"http://localhost:3000/api/comments?threadID=" + props._id
			);
			if (!res.ok) return;
			const resData = await res.json();

			setComments(
				resData.comments.map((comment) => (
					<Comment key={comment._id} {...comment} />
				))
			);
		}

		if (popup) {
			getComments();
		}
	}, [props._id, popup, status.comments]);

	const poster = props.authorID;
	const moment = getMomentFrom(new Date(props.postDate));
	const views = shortenNumber(status.views.length);
	const upvotes = shortenNumber(status.upvotes.length);
	const downvotes = shortenNumber(status.downvotes.length);

	const commentNumbers =
		props.comments.length > comments.length
			? shortenNumber(props.comments.length)
			: shortenNumber(comments.length);

	async function handleUpvote() {
		if (!user) {
			alert("You must be logged in to upvote!");
			return;
		}
		const res = await fetch("/api/crud/upvote", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				...user,
				userID: user._id,
				threadID: props._id,
			}),
		});
		if (!res.ok) {
			alert("You must be logged in to upvote!");
			return;
		}
		const resData = await res.json();
		if (resData.yes) {
			setStatus((prev) => ({
				...prev,
				upvotes: [...prev.upvotes, user._id],
			}));
			return;
		} else if (resData.no) {
			setStatus((prev) => ({
				...prev,
				upvotes: prev.upvotes.filter((uID) => uID !== user._id),
			}));
			return;
		}
		alert("You must be logged in to upvote!");
	}

	async function handleDownvote() {
		if (!user) {
			alert("You must be logged in to downvote!");
			return;
		}
		const res = await fetch("/api/crud/downvote", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				...user,
				userID: user._id,
				threadID: props._id,
			}),
		});
		if (!res.ok) {
			alert("You must be logged in to downvote!");
			return;
		}
		const resData = await res.json();
		if (resData.yes) {
			setStatus((prev) => ({
				...prev,
				downvotes: [...prev.downvotes, user._id],
			}));
			return;
		} else if (resData.no) {
			setStatus((prev) => ({
				...prev,
				downvotes: prev.downvotes.filter((uID) => uID !== user._id),
			}));
			return;
		}
		alert("You must be logged in to downvote!");
	}

	const handleComment = () => {
		setPopup((prev) => !prev);
	};

	async function handleCommentSubmit() {
		if (commentText.trim().length === 0) {
			alert("Please enter a comment with atleast one character!");
			return;
		}
		try {
			const res = await fetch("/api/crud/comment", {
				method: "POST",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					...user,
					userID: user._id,
					text: commentText,
					threadID: props._id,
				}),
			});
			const resData = await res.json();
			if (resData.comment) {
				setStatus((prev) => ({
					...prev,
					comments: [...prev.comments, resData.comment],
				}));
				return;
			}
		} catch (error) {}
		alert("You must be logged in to comment!");
	}

	function handleShare() {}

	return (
		<div className="thread__container">
			<div className="thread__container__top">
				<div className="thread__profile__container">
					<img
						src={poster.profilePicture}
						alt="something for poster profile"
					/>
					<div className="thread__profile">
						<p className="thread__profile__spacename">
							{props.space.name + " / #" + props.channel.name}
						</p>
						<div className="thread__profile__username__container">
							{poster.subscription === "Captain" && (
								<FaCrown className="thread__profile__subscription" />
							)}
							<p className="thread__profile__username">
								{poster.username}
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
						className={
							"thread__button" +
							(user && status.upvotes.includes(user._id)
								? " thread__button__isactive"
								: "")
						}
						onClick={handleUpvote}
					>
						<RiRocket2Line className="thread__buttons__upvote__icon thread__buttons__icons" />
						<p className="thread__buttons__value">{upvotes}</p>
					</button>
					<button
						className={
							"thread__button" +
							(user && status.downvotes.includes(user._id)
								? " thread__button__isactive"
								: "")
						}
						onClick={handleDownvote}
					>
						<RiRocket2Line className="thread__buttons__downvote__icon thread__buttons__icons" />
						<p className="thread__buttons__value">{downvotes}</p>
					</button>
					<button className="thread__button" onClick={handleComment}>
						<FaRegCommentAlt className="thread__buttons__comment__icon thread__buttons__icons" />
						<p className="thread__buttons__value">
							{commentNumbers}
						</p>
					</button>

					<button className="thread__button" onClick={handleShare}>
						<AiOutlineShareAlt className="thread__buttons__share__icon thread__buttons__icons" />
						<p className="thread__buttons__value">Share</p>
					</button>
				</div>
			</div>

			{popup && comments && (
				<div className="popupthread__comment__container">
					<label>Comment as {poster.postername}</label>
					<div className="popupthread__user__comment__container">
						<img src={poster.profilePicture} alt="" />
						<input
							className="popupthread__user__comment__text"
							placeholder="What are your thought about this post?"
							name="commentText"
							type={"text"}
							onChange={(event) =>
								setCommentText(event.target.value)
							}
						/>
						<button
							className="popupthread__user__submit__comment"
							onClick={handleCommentSubmit}
						>
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
