import Navbar from "components/navbar/Navbar";
import DiscoverPageSpaceComponent from "components/space/discoverSpace";
import "./discoverstyle.css";

import spaceData from "data/spacedata";

export default function Discover() {
	const spaces = spaceData.map((space) => {
		return <DiscoverPageSpaceComponent key={space.ID} {...space} />;
	});

	return (
		<div className="font_size_rule">
			<Navbar />
			<div className="discoverPage__body ">
				<div className="discoverPage__body__bottom">
					<h1>Discover more space</h1>
					<p>See other community in HyperSpace!</p>

					<div className="discoverPage__space__container">
						{spaces}
					</div>
				</div>
			</div>
		</div>
	);
}
