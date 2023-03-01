import ThreadView from "pages/home/ThreadView.js";
import Navbar from "./components/navbar/Navbar.js";

// imports for temporary mockup
import userData from "data/userdata.js";
import UserContext from "contexts/UserContext.js";

export default function App() {
	return (
		<div>
			<UserContext.Provider
				value={{ isLoggedIn: true, userID: userData[0].ID }}
			>
				<Navbar />
				<ThreadView />
			</UserContext.Provider>
		</div>
	);
}
