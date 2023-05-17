import UserContext from "contexts/UserContext";
import CreateSpace from "pages/createspace/createspace.js";
import CreateThread from "pages/createthread/createthread.js";
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
	// const [user, setUser] = useState(null);
	const [user, setUser] = useState({
		_id: "645bcbd39365d8736c77bf5a",
		username: "ketsu",
		password: "1234",
		key: "c381bf796601ad28b2614d60b06471c81fbf7e9253602be498076856ef5a625b62c3afa186bfc1e0fc638ecaff60b1db",
		joinedSpaces: [
			"645bd00f2b7d749510bc10cb",
			"645bd00f2b7d749510bc10cc",
			"645bd00f2b7d749510bc10cd",
			"645bd00f2b7d749510bc10ce",
		],
		profilePicture: "/user/profile-pic-1.jpg",
		joinedDate: Date.now(),
	});

	return (
		<UserContext.Provider value={[user, setUser]}>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/space/:spaceName" element={<SpacePage />} />
				<Route path="/discover" element={<Discover />} />
				<Route
					path="/create-thread/:channelID"
					element={<CreateThread />}
				/>
				<Route path="/create-space" element={<CreateSpace />} />

				<Route path="*" element={<NotFound />} />
			</Routes>
		</UserContext.Provider>
	);
}
