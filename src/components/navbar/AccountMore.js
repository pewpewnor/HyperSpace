import { useEffect } from "react";
import "./navbar.css";

export default function AccountMorePopUp() {
	alert("account more pop up!");

	return (
		<div className="background">
			<div className="account-more-container">
				<div className="button-container">
					<button>My Profile</button>
					<button>Create new space</button>
					<button>Sign out</button>
				</div>
			</div>
		</div>
	);
}
