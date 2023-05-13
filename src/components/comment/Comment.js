import { findUser } from "utils/find";
import { FaCrown, FaRegCommentAlt } from "react-icons/fa";

import ThreadText from "../thread/ThreadText";

function Comment(props) {
	const user = findUser(props.userID);

	return (
		<div className="comment__profile__container">
			<img src={user.profilePicture} alt="something for user profile" />
			<div className="comment__profile">
				<p className="comment__profile__spacename">
					{props.space.name + " / #" + props.channel.name}
				</p>
				<div className="comment__profile__username__container">
					<FaCrown className="comment__profile__subscription" />
					<p className="comment__profile__username">{user.name}</p>
				</div>
			</div>
			<div className="comment__comment">
				<ThreadText />
			</div>
		</div>
	);
}

export default Comment;
