import "./spaceBanner.css";

export default function SpaceBanner( {isJoined} ){
    const hasJoined = isJoined;

    return(
        <div className="space__banner__container">
            <div className="space__banner__background"> {/* Insert space banner here, css still not optimized*/} </div>
            <div className="space__banner__data">
                <div className="space__banner__top">
                    <div className="space__profile">
                        <div className="space__profile-picture">
                            {/* Insert profile picture here */}
                        </div>
                        
                        <div className="space__data">
                            <p className="space__title">Psychology</p>
                            <p className="space__member">6.5M Astronout Joined</p>
                        </div>
                    </div>

                    <div className="space__button">
                        <button className={hasJoined ? "space__button__joined" : "space__button__Notjoined"}>
                            {hasJoined ? "Joined" : "Join"}
                        </button>
                    </div>
                </div>

                <div className="space__banner__bottom">
                    <p className="space__banner__desc">
                        This is Psychology Community, the best place to search anything related to psychology,
                        Come and join with 6.5M user across the world!
                    </p>
                </div>
            </div>
        </div>
    );
}