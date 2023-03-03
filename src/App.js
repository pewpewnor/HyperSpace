import ThreadView from "pages/home/ThreadView.js";
import Navbar from "./components/navbar/Navbar.js";

// imports for temporary mockup
import userData from "data/userdata.js";
import UserContext from "contexts/UserContext.js";

//import css
import "./style.css";

export default function App() {
	return (
		<div className="body__container">
			<UserContext.Provider
				value={{ isLoggedIn: true, userID: userData[0].ID }}
			>
				<Navbar />
				<ThreadView />
			</UserContext.Provider>
		</div>
	);
}
