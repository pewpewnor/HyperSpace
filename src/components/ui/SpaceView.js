import "./SpaceView-style.css"
import SpaceJoined from "./SpaceJoined";

export default function SpaceView(){
    return(
        <div className="space__view__container">
            <div className="space__view__title__container">
                <div className="border"></div>
                <div className="space__view__title">My Space</div>
            </div>
            <div className="space__user__joined">
                {/* Placeholder */}
                <SpaceJoined />
            </div>

            <div className="space__discover__container">
                <button className="space__discover">Discover more</button>
            </div>
        </div>
    );

}