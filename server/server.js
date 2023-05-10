const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(express.json());

mongoose
	.connect(process.env.DEV_URI)
	.then(() => console.log("Database connected!"))
	.catch((err) => console.log(err));

// Test

const User = require("./User");

async function run() {
	try {
		const data = await User.create({
			name: "ketsu_no_ana117",
			profilePicture: "assets/profile-pic-1.jpg",
			subscription: "Lieutenant",
		});
		// const data = await User.deleteMany({});
		console.log(data);
	} catch (error) {
		console.error(error);
	}
	console.error("Halleluya the run works!");
}

run();

console.error("Halleluya it works!");

// End test

app.post("/api/test", (req, res) => {
	console.log("test sucess!");
	res.status(200).send("test message ok");
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});
