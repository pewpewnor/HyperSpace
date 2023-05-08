import UserContext from "contexts/UserContext";
import spaceData from "data/spacedata";
import userData from "data/userdata";
import NotFound from "notfound/NotFound";
import Login from "pages/login/Login";
import Register from "pages/signup/Register";
import { Route, Routes } from "react-router-dom";
import Discover from "./pages/discover/discover.js";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/ProfilePage";
import SpacePage from "./pages/spacepage/SpacePage";
import "./style.css";

export default function App() {
	return (
		<UserContext.Provider value={{ isLoggedIn: true, user: userData[0] }}>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route
					path="/profile"
					element={<Profile user={userData[0]} />}
				/>
				<Route
					path="/space"
					element={<SpacePage space={spaceData[0]} />}
				/>
				<Route path="/discover" element={<Discover />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</UserContext.Provider>
	);
}
