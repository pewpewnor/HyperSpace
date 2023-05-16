import { getMomentFrom } from "utils/date";
import "./ChildComment.css";
import CommentText from "./CommentText";

function ChildComment(props) {
	const user = props.authorID;
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
							{user.username}
						</p>
					</div>
					<div className="childcomment__info__date">
						Posted {moment}
					</div>
				</div>
			</div>
			<div className="childcomment__comment">
				<CommentText text={props.text} />
			</div>
		</div>
	);
}

export default ChildComment;
