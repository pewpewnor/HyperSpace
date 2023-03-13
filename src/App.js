import Home from "./pages/home/Home";
// import SpacePage from "./pages/spacepage/SpacePage";
import UserContext from "contexts/UserContext";
import Login from "pages/login/Login";
import Register from "pages/signup/Register";
import "./style.css";

// imports for temporary mockup
import userData from "data/userdata";
import spaceData from "data/spacedata";


export default function App() {
	return (
		<UserContext.Provider value={{ isLoggedIn: true, user: userData[0] }}>
			<Register />
		</UserContext.Provider>
	);
}
