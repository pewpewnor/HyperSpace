import "./navbar.css";

export default function AccountMorePopUp(){
    return(
        <div className="background">
            <div className="account-more-container">
                <div className="button-container">
                    {alert('Hello World!')}
                    <button>My Profile</button>
                    <button>Sign out</button>
                </div>
            </div>
        </div>
    );
}