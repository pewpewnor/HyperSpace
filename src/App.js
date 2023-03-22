import UserContext from "contexts/UserContext";
import Login from "pages/login/Login";
import "./style.css";

// imports for temporary mockup
import Home from "./pages/home/Home";
import SpacePage from "./pages/spacepage/SpacePage";
import ProfilePage from "./pages/profile/ProfilePage";
import userData from "data/userdata";
import spaceData from "data/spacedata";

export default function App() {
	return (
		<UserContext.Provider value={{ isLoggedIn: true, user: userData[0] }}>
			<ProfilePage user={userData[0]}/>
			{/* <SpacePage space={spaceData[0]} /> */}
			{/* <Home /> */}
			{/* <Login /> */}
		</UserContext.Provider>
	);
}
