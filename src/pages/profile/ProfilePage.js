import "./ProfilePage.css";
import { FaCrown } from "react-icons/fa";

import Navbar from "../../components/navbar/Navbar";

export default function ProfilePage({user}){
    return (
        <div className="profilePage__container">
            <Navbar />
            
            <div className="profilePage__body__container">
                <div className="profilePage__body">
                    <div className="profilePage__topSection__container">
                        <h1>My Profile</h1>
                        <div className="profilePage__profile__information__container">
                            <div className="profilePage__profile__information">
                                <img src={user.profilePicture} alt='user'></img>
                                <div className="profilePage__border"></div>
                                <div className="profilePage__user__data">
                                    <div className="profilePage__user__name">{user.name}</div>
                                    <div className="profilePage__user__subscription">
                                        <FaCrown className="profilePage__user_subscription__crown"/>
                                        <div className="profilePage__user__subscription__data">
                                            {user.subscription}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="profilePage__profile_joined__date">
                                <p>Joined at</p>
                                <h1>{user.joinedSince}</h1>
                            </div>
                        </div>

                        <div className="profilePage__user__detailed__data__container">
                            <div className="profilePage__user__view__container">
                                <h1 className="profilePage__user__detailed__data__container__title">
                                    Total Views
                                </h1>
                                <h2 className="profilePage__user__detailed__data__container__value">
                                    {/* Placeholder */}
                                    202,304 Views
                                </h2>                                
                            </div>
                            <div className="profilePage__user__income__container">
                                <div className="profilePage__income__container">
                                    <h1 className="profilePage__user__detailed__data__container__title">
                                        Income Gained
                                    </h1>
                                    <h2 className="profilePage__user__detailed__data__container__value">
                                        {/* Placeholder */}
                                        $101,152
                                    </h2>
                                </div>
                                <button className="profilePage__checkout__btn">Checkout</button>
                            </div>
                        </div>
                    </div>

                    <div className="profilePage__border__bottom"/>

                    <div className="profilePage__bottomSection__container">
                        <h1>Your Thread</h1>
                        {/* Placeholder: Place threads posted by user here */}
                    </div>
                </div>
            </div>
        </div>
    );
}