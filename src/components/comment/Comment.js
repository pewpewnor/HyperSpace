import UserContext from "contexts/UserContext";
import { useContext, useState } from "react";
import { getMomentFrom } from "utils/date";
import ChildComment from "./ChildComment";
import "./Comment.css";
import CommentText from "./CommentText";

function Comment(props) {
	const [user] = useContext(UserContext);
	const poster = props.authorID;
	const moment = getMomentFrom(new Date(props.postDate));

	const [childCommentsData, setChildCommentsData] = useState(
		props.childComments
	);
	const [replyPop, setReplyPop] = useState(false);
	const [replyText, setReplyText] = useState("");

	const handleReplyPop = () => {
		setReplyPop((prev) => !prev);
	};

	async function handleReplySubmit() {
		if (replyText.trim().length === 0) {
			alert("Please enter a reply with atleast one character");
			return;
		}
		try {
			const res = await fetch("/api/crud/childcomment", {
				method: "POST",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					...user,
					userID: user._id,
					text: replyText,
					commentID: props._id,
				}),
			});
			const resData = await res.json();
			if (resData.childComment) {
				setChildCommentsData((prev) => [...prev, resData.childComment]);
				return;
			}
		} catch (error) {}
		alert("You must be logged in to reply!");
	}

	const childComments = childCommentsData.map((childComment) => (
		<ChildComment key={childComment._id} {...childComment} />
	));

	return (
		<div className="comment__profile__container">
			<div className="comment__profile__user__container">
				<img
					src={poster.profilePicture}
					alt="something for user profile"
				/>
				<div className="comment__profile">
					<div className="comment__profile__username__container">
						<p className="comment__profile__username">
							{poster.username}
						</p>
					</div>
					<div className="comment__info__date">Posted {moment}</div>
				</div>
			</div>

			<div className="comment__down__container">
				<div className="comment__left__container"></div>

				<div className="comment__right__container">
					<div className="comment__comment">
						<CommentText text={props.text} />
					</div>
					<div className="comment__comment__button">
						<button onClick={handleReplyPop}>reply</button>
					</div>
					{replyPop && (
						<div className="comment__user__comment__container">
							<input
								className="comment__user__comment__text"
								placeholder="reply"
								name="replyText"
								type={"text"}
								onChange={(event) => {
									setReplyText(event.target.value);
								}}
							/>
							<button
								className="comment__user__submit__comment"
								onClick={handleReplySubmit}
							>
								submit
							</button>
						</div>
					)}
					<div className="comment__childcomment__list__container">
						{childComments}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Comment;
