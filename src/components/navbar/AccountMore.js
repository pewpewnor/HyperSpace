import { useEffect } from "react";
import "./navbar.css";

export default function AccountMorePopUp() {
	useEffect(() => {
		alert("account more pop up!");
	});

	return (
		<div className="background">
			<div className="account-more-container">
				<div className="button-container">
					<button>My Profile</button>
					<button>Sign out</button>
				</div>
			</div>
		</div>
	);
}
