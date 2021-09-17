const express = require("express");
const app = express();
const connectDB = require("./db/connect");
const contacts = require("./routes/contact");
require("dotenv").config();

// Middleware
app.use(express.json());
app.use("/contacts", contacts);

app.get("/", (req, res) => {
	res.send("Welcome to my phonebook");
});

let port = process.env.PORT || 3000;

const start = async () => {
	try {
		await connectDB(process.env.MONGODB_URI);
		app.listen(port, console.log(`Server is listening on port ${port}`));
	} catch (error) {
		console.log(error);
	}
};

start();
