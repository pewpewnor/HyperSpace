// import Cookies from "js-cookie";

async function checkIsLoggedIn(user) {
	// if (user === null) {
	// 	const cookie = Cookies.get("hyperspace-data");
	// 	if (cookie) {
	// 		const { userID, key } = JSON.parse(cookie);
	// 		if (userID !== undefined && key !== undefined) {
	// 			return false;
	// 		} else {
	// 			user = cookie;
	// 		}
	// 	} else {
	// 		return false;
	// 	}
	// }

	const res = await fetch("http://localhost:3001/api/checkloggedin", {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ userID: user._id, ...user }),
	});
	const resData = await res.json();

	if (resData.error) {
		return false;
	} else {
		return true;
	}
}

export default checkIsLoggedIn;
