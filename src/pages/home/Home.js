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
	const [user] = useContext(UserContext);

	const [isLoading, setIsLoading] = useState(true);
	const [searchQuery, setSearchQuery] = useState("");

	const [threadsData, setThreadsData] = useState([]);

	useEffect(() => {
		async function getThreads() {
			if (user === null) {
				navigate("/login");
				return;
			}

			try {
				const res = await fetch(
					"http://localhost:3000/api/recommendedthreads",
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
				const resData = await res.json();

				if (searchQuery.trim() === "") {
					setThreadsData(resData);
				} else {
					setThreadsData(
						resData.filter((data) => {
							const thread = data.thread;

							return (
								thread.title
									.toLowerCase()
									.includes(searchQuery.toLowerCase()) ||
								thread.text
									.toLowerCase()
									.includes(searchQuery.toLowerCase())
							);
						})
					);
				}
			} catch (error) {}

			setIsLoading(false);
		}

		getThreads();
	}, [user, navigate, searchQuery]);

	function handleSearch(event) {
		setSearchQuery(event.target.value);
	}

	const threads = threadsData
		.map((data) => (
			<Thread
				key={data.id}
				{...data.thread}
				space={data.space}
				channel={data.channel}
			/>
		))
		.reverse();

	return (
		<div className="all font_size_rule">
			{isLoading && <Loading />}
			<Navbar searchQuery={searchQuery} handleSearch={handleSearch} />
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
