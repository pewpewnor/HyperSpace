import { findUser } from "utils/find";
import { FaCrown, FaRegCommentAlt } from "react-icons/fa";

import ThreadText from "../thread/ThreadText";

function Comment(props) {
	const user = findUser(props.userID);

	return (
		<div className="childcomment__profile__container">
			<img src={user.profilePicture} alt="something for user profile" />
			<div className="childcomment__profile">
				<p className="childcomment__profile__spacename">
					{props.space.name + " / #" + props.channel.name}
				</p>
				<div className="childcomment__profile__username__container">
					<FaCrown className="childcomment__profile__subscription" />
					<p className="childcomment__profile__username">
						{user.name}
					</p>
				</div>
			</div>
			<div className="childcomment__comment">
				<ThreadText />
			</div>
		</div>
	);
}

export default Comment;
