import Home from "./pages/home/Home";
import UserContext from "contexts/UserContext";
import "./style.css";

// imports for temporary mockup
import userData from "data/userdata";

export default function App() {
	return (
		<UserContext.Provider
			value={{ isLoggedIn: true, userID: userData[0].ID }}
		>
			<Home />
		</UserContext.Provider>
	);
}
