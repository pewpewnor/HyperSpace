import Loading from "components/loading/Loading";
import Thread from "components/thread/Thread";
import UserContext from "contexts/UserContext";
import { useContext, useEffect, useState } from "react";
import { FaCrown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import "./ProfilePage.css";

export default function Profile() {
	const [isLoading, setIsLoading] = useState(true);
	const navigate = useNavigate();
	const [user] = useContext(UserContext);

	const [profileData, setProfileData] = useState({
		viewTotal: 0,
		threads: [],
	});

	useEffect(() => {
		async function getProfileData() {
			try {
				const res = await fetch("/api/profiledata", {
					method: "POST",
					headers: {
						Accept: "application/json",
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ ...user, userID: user._id }),
				});
				if (!res.ok) {
					navigate("/login");
					return;
				}
				const resData = await res.json();
				setProfileData(resData);
				setIsLoading(false);
			} catch (err) {}
		}

		if (!user) {
			navigate("/login");
			return;
		}
		getProfileData();
	}, [navigate, user]);

	if (!user) {
		navigate("/login");
		return;
	}

	const threads = profileData.threads
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
		<div className="profilePage__container font_size_rule">
			{isLoading && <Loading />}
			<Navbar />

			<div className="profilePage__body__container">
				<div className="profilePage__body">
					<div className="profilePage__topSection__container">
						<h1>My Profile</h1>
						<div className="profilePage__profile__information__container">
							<div className="profilePage__profile__information">
								<img src={user.profilePicture} alt="user"></img>
								<div className="profilePage__border"></div>
								<div className="profilePage__user__data">
									<div className="profilePage__user__name">
										{user.username}
									</div>
									<div className="profilePage__user__subscription">
										{user.subscription === "Captain" && (
											<FaCrown className="profilePage__user_subscription__crown" />
										)}
										<div className="profilePage__user__subscription__data">
											{user.subscription}
										</div>
									</div>
								</div>
							</div>
							<div className="profilePage__profile_joined__date">
								<p>Joined at</p>
								<h1>
									{new Date(user.joinedDate)
										.toString()
										.slice(4, 16)}
								</h1>
							</div>
						</div>

						<div className="profilePage__user__detailed__data__container">
							<div className="profilePage__user__view__container">
								<h1 className="profilePage__user__detailed__data__container__title">
									Total Views
								</h1>
								<h2 className="profilePage__user__detailed__data__container__value">
									{profileData.viewTotal} Views
								</h2>
							</div>
							<div className="profilePage__user__income__container">
								<div className="profilePage__income__container">
									<h1 className="profilePage__user__detailed__data__container__title">
										Income Gained
									</h1>
									<h2 className="profilePage__user__detailed__data__container__value">
										${profileData.viewTotal / 1000}
									</h2>
								</div>
								<button className="profilePage__checkout__btn">
									Checkout
								</button>
							</div>
						</div>
					</div>

					<div className="profilePage__buySubscription">
						<h1>Buy Subscription now to remove ads</h1>
						<button className="profilePage__checkout__btn">
							Buy Subscription
						</button>
					</div>

					<div className="profilePage__border__bottom" />

					<div className="profilePage__bottomSection__container">
						<h1>Your Thread</h1>
						{threads}
					</div>
				</div>
			</div>
		</div>
	);
}
