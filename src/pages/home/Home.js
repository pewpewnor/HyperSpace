import Loading from "components/loading/Loading";
import Navbar from "components/navbar/Navbar";
import MySpace from "components/space/MySpace";
import Thread from "components/thread/Thread";
import UserContext from "contexts/UserContext";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";

function Home() {
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(true);
	const [user] = useContext(UserContext);

	const [threads, setThreads] = useState([]);

	useEffect(() => {
		async function getThreads() {
			if (user === null) {
				navigate("/login");
				return;
			}

			let threadsData = [];

			try {
				const res = await fetch(
					"http://localhost:3001/api/recommendedthreads",
					{
						method: "POST",
						headers: {
							Accept: "application/json",
							"Content-Type": "application/json",
						},
						body: JSON.stringify({ ...user, userID: user._id }),
					}
				);
				if (!res.ok) {
					navigate("/login");
					return;
				}
				threadsData = await res.json();
			} catch (error) {}

			setThreads(
				threadsData.map((data) => (
					<Thread
						key={data.id}
						{...data.thread}
						user={user}
						space={data.space}
						channel={data.channel}
					/>
				))
			);
			setIsLoading(false);
		}

		getThreads();
	}, [user, navigate]);

	return (
		<div className="all font_size_rule">
			{isLoading && <Loading />}
			<Navbar />
			<div className="body">
				<div className="left-container">
					<MySpace />
				</div>
				<div className="middle-container">
					<div className="middle-container__filter-bar">
						<h1>Home</h1>
					</div>

					<div className="middle-container__thread-section">
						{threads}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
