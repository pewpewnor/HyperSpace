import UserContext from "contexts/UserContext";
import CreateSpace from "pages/createspace/createspace.js";
import CreateThread from "pages/createthread/createthread.js";
import NotLoggedIn from "pages/forbidden/NotLoggedIn.js";
import Login from "pages/login/Login";
import NotFound from "pages/notfound/NotFound.js";
import Register from "pages/signup/Register";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Discover from "./pages/discover/discover.js";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/ProfilePage";
import SpacePage from "./pages/spacepage/SpacePage";
import "./style.css";

export default function App() {
	const [user, setUser] = useState(null);

	return (
		<UserContext.Provider value={[user, setUser]}>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/profile/:username" element={<Profile />} />
				<Route path="/space/:spaceName" element={<SpacePage />} />
				<Route path="/discover" element={<Discover />} />
				<Route path="/create-thread" element={<CreateThread />} />
				<Route path="/create-space" element={<CreateSpace />} />
				<Route path="/forbidden" element={<NotLoggedIn />} />

				<Route path="*" element={<NotFound />} />
			</Routes>
		</UserContext.Provider>
	);
}
