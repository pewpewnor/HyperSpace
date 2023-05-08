const express = require("express");
const app = express();

app.use(express.json());

app.post("/api/test", (req, res) => {
	console.log("test sucess!");
	res.status(200).send("test message ok");
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});
