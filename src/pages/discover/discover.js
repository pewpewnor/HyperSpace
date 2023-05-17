import Loading from "components/loading/Loading";
import Navbar from "components/navbar/Navbar";
import DiscoverPageSpaceComponent from "components/space/discoverSpace";
import { useEffect, useState } from "react";
import "./discoverstyle.css";

export default function Discover() {
	const [isLoading, setIsLoading] = useState(true);
	const [searchQuery, setSearchQuery] = useState("");

	const [spacesData, setSpacesData] = useState([]);

	useEffect(() => {
		async function getAllSpaces() {
			try {
				const res = await fetch("/api/discover");
				const resData = await res.json();

				setSpacesData(resData);
			} catch (error) {}
			setIsLoading(false);
		}

		getAllSpaces();
	}, []);

	const spaces = spacesData.map((space) => {
		return <DiscoverPageSpaceComponent key={space._id} {...space} />;
	});

	function handleSearch(event) {
		setSearchQuery(event.target.value);
	}

	return (
		<div className="font_size_rule">
			{isLoading && <Loading />}
			<Navbar searchQuery={searchQuery} handleSearch={handleSearch} />
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
