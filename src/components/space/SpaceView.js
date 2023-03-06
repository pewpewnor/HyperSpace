import Space from "./Space";
import { findSpace } from "utils/find";

export default function SpaceView(props) {
	const spaceArray = props.spacesID.map((spaceID) => {
		return findSpace(spaceID);
	});

	const space = spaceArray.map((space) => {
		return <Space key={space.ID} {...space} />;
	});

	return <div>{space}</div>;
}
