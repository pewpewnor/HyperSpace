import UserContext from "contexts/UserContext";
import spaceData from "data/spacedata";
import userData from "data/userdata";

import CreateThread from "pages/createthread/createthread.js";
import CreateSpace from "pages/createspace/createspace.js";

import Login from "pages/login/Login";
import NotFound from "pages/notfound/NotFound.js";
import Register from "pages/signup/Register";
import { Route, Routes } from "react-router-dom";
import Discover from "./pages/discover/discover.js";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/ProfilePage";
import SpacePage from "./pages/spacepage/SpacePage";

import "./style.css";

export default function App() {
	return (
		<UserContext.Provider
			value={{
				isLoggedIn: true,
				user: userData[0],
			}}
		>
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
					element={
						<SpacePage space={spaceData[0]} user={userData[0]} />
					}
				/>
				<Route path="/discover" element={<Discover />} />
				<Route path="/create-thread" element={<CreateThread />} />
				<Route path="/create-space" element={<CreateSpace />} />

				<Route path="*" element={<NotFound />} />
			</Routes>
		</UserContext.Provider>
	);
}
