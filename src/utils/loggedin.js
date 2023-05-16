// import Cookies from "js-cookie";

// // async function checkIsLoggedIn(user) {
// // 	const res = await fetch("http://localhost:3000/api/checkloggedin", {
// // 		method: "POST",
// // 		headers: {
// // 			Accept: "application/json",
// // 			"Content-Type": "application/json",
// // 		},
// // 		body: JSON.stringify({ userID: user._id, ...user }),
// // 	});
// // 	const resData = await res.json();

// // 	if (resData.error) {
// // 		return false;
// // 	} else {
// // 		return true;
// // 	}
// // }

// async function getUserFromCookie() {
// 	const cookie = Cookies.get("hyperspace-data");
// 	if (cookie) {
// 		const { _id, key } = JSON.parse(cookie);
// 		if (_id === undefined || key === undefined) {
// 		}
// 		try {
// 			const res = await fetch("http://localhost:3000/api/checkloggedin", {
// 				method: "POST",
// 				headers: {
// 					Accept: "application/json",
// 					"Content-Type": "application/json",
// 				},
// 				body: JSON.stringify({ userID: _id, key: key }),
// 			});
// 			console.log(await res.json());
// 			if (!res.ok) {
// 				return null;
// 			}
// 			return await res.json().user;
// 		} catch (error) {}
// 	}
// 	return null;
// }

// export default getUserFromCookie;
