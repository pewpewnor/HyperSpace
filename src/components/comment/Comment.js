import { findUser } from "utils/find";
import { getMomentFrom } from "utils/date";
import { FaRegCommentAlt } from "react-icons/fa";

import ThreadText from "../thread/ThreadText";
import "./Comment.css";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";

function Comment(props) {
	const user = findUser(props.userID);
	const moment = getMomentFrom(new Date(props.postDate));

	const [reply, setReply] = useState(false);

	const handleReply = () => {
		setReply(!reply);
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
							{user.name}
						</p>
					</div>
					<div className="comment__info__date">Posted {moment}</div>
				</div>
			</div>
			<div className="comment__comment">
				<ThreadText text={props.text} />
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
				{props.childComment}
			</div>
		</div>
	);
}

export default Comment;
