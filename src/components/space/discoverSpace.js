import "./discoverSpace.css"

export default function DiscoverPageSpaceComponent(props){
    return(
        <div className="discoverPage__spaceComponent__container">
            <div className="discoverPage__spaceComponent__wallpaper">

            </div>

            <div className="discoverPage__spaceComponent__spaceData__container">
                <div className="discoverPage__spaceComponent__spaceData__top flex">
                    <div className="discoverPage__spaceComponent__spaceData__top__spaceProfile flex">
                        <div className="discoverPage__spaceComponent__spaceData__top__spaceProfile__profilePicture">

                        </div>
                        <div className="discoverPage__spaceComponent__spaceData__top__spaceProfile__data">
                            <h2>{props.name}</h2>
                            <p>{props.members}</p>
                        </div>
                    </div>
                    <button className="button__default">Join Space</button>
                </div>
                <div className="discoverPage__spaceComponent__spaceData__bottom">
                    <p>{props.spaceDesctiption}</p>
                </div>
            </div>
        </div>
    );
}