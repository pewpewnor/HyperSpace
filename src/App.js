import UserContext from "contexts/UserContext";
import Login from "pages/login/Login";
import Register from "pages/signup/Register";
import { Route, Routes } from "react-router-dom";
import "./style.css";
import NotFound from "notfound/NotFound";
import Home from "./pages/home/Home";
import Discover from "./pages/discover/discover.js";
import spaceData from "data/spacedata";
import SpacePage from "./pages/spacepage/SpacePage";
import userData from "data/userdata";
import Profile from "./pages/profile/ProfilePage";

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
