// import SpacePage from "./pages/spacepage/SpacePage";
import UserContext from "contexts/UserContext";
import Login from "pages/login/Login";
import Register from "pages/signup/Register";
import "./style.css";

// imports for temporary mockup
import spaceData from "data/spacedata";
import userData from "data/userdata";
import Home from "./pages/home/Home";
import ProfilePage from "./pages/profile/ProfilePage";
import SpacePage from "./pages/spacepage/SpacePage";
import DiscoverPage from "./pages/discover/discover.js";

export default function App() {
	return (
		<UserContext.Provider value={{ isLoggedIn: true, user: userData[0] }}>
			{/* <Register /> */}
			{/* <ProfilePage user={userData[0]} /> */}
			{/* <SpacePage space={spaceData[0]} /> */}
			{/* <Home /> */}
			<Login />
			{/* <DiscoverPage /> */}
		</UserContext.Provider>
	);
}
