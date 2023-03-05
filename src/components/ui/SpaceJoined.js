import "./SpaceJoined-style.css";

export default function SpaceJoined(){
    return(
        <div className="space__joined__info__container">
            <div className="space__joined__pp">
                {/* Insert profile picture here */}
            </div>
            <div className="space__joined__data">
                <p className="space__joined__title">SpyxFamily</p>
                <p className="space__joined__member">6.5M Astronout Joined</p>
            </div>
        </div>
    );
}