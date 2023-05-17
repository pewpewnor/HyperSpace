import { useState } from "react";
import { getMomentFrom } from "utils/date";
import "./Comment.css";
import CommentText from "./CommentText";

function Comment(props) {
	const user = props.authorID;
	const moment = getMomentFrom(new Date(props.postDate));

	const [reply, setReply] = useState(false);

	const handleReply = () => {
		setReply((prev) => !prev);
	};

	return (
		<div className="comment__profile__container">
			<div className="comment__profile__user__container">
				<img
					src={user.profilePicture}
					alt="something for user profile"
				/>
				<div className="comment__profile">
					<div className="comment__profile__username__container">
						<p className="comment__profile__username">
							{user.username}
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
						<button onClick={handleReply}>reply</button>
					</div>
					{reply && (
						<div className="comment__user__comment__container">
							<input
								className="comment__user__comment__text"
								placeholder="reply"
								type={"text"}
							/>
							<button className="comment__user__submit__comment">
								submit
							</button>
						</div>
					)}
					<div className="comment__childcomment__list__container">
						{props.childComments}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Comment;
