import { useState } from "react";
import "./threadtext.css";

const MAX_SHORTTEXT_CHARACTER = 500;

export default function ThreadText(props) {
	const [showShortText, setShowShortText] = useState(true);

	function handleReadMore() {
		setShowShortText(!showShortText);
	}

	if (props.text.length > MAX_SHORTTEXT_CHARACTER) {
		const shortText = props.text.slice(0, MAX_SHORTTEXT_CHARACTER) + "...";
		if (showShortText) {
			return (
				<p className="thread__content__text">
					{shortText + " "}
					<button onClick={handleReadMore}>[read more]</button>
				</p>
			);
		}
		return (
			<p className="thread__content__text">
				{props.text + " "}
				<button onClick={handleReadMore}>[show less]</button>
			</p>
		);
	}

	return <p className="thread__content__text">{props.text}</p>;
}
