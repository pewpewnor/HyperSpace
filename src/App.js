import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import UserContext from "contexts/UserContext";
import "./style.css";

// imports for temporary mockup
import userData from "data/userdata";

export default function App() {
	return (
		<UserContext.Provider value={{ isLoggedIn: true, user: userData[0] }}>
			<Login />
		</UserContext.Provider>
	);
}
