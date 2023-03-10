// import Home from "./pages/home/Home";
import SpacePage from "./pages/spacepage/SpacePage";
import UserContext from "contexts/UserContext";
import "./style.css";

// imports for temporary mockup
import userData from "data/userdata";
import spaceData from "data/spacedata";

export default function App() {
	return (
		<UserContext.Provider value={{ isLoggedIn: true, user: userData[0] }}>
			<SpacePage space={spaceData[0]} />
		</UserContext.Provider>
	);
}
