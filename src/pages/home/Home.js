import ThreadView from "./ThreadView";
import Navbar from "../../components/navbar/Navbar";
import "./home.css";

function Home() {
	return (
		<div className="body">
			<Navbar />
			<ThreadView />
		</div>
	);
}

export default Home;
