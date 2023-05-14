import { findUser } from "utils/find";
import { getMomentFrom } from "utils/date";

import ThreadText from "../thread/ThreadText";
import "./ChildComment.css";

function childComment(props) {
	const user = findUser(props.userID);
	const moment = getMomentFrom(new Date(props.postDate));

	return (
		<div className="childcomment__profile__container">
			<div className="childcomment__profile__user__container">
				<img
					src={user.profilePicture}
					alt="something for user profile"
				/>
				<div className="childcomment__profile">
					<div className="childcomment__profile__username__container">
						<p className="childcomment__profile__username">
							{user.name}
						</p>
					</div>
					<div className="childcomment__info__date">Posted {moment}</div>
				</div>
			</div>
			<div className="childcomment__comment">
				<ThreadText text={props.text} />
			</div>
		</div>
	);
}

export default childComment;
