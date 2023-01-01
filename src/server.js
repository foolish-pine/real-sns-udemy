const express = require("express");
const mongoose = require("mongoose");

const app = express();
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const userRoute = require("./routes/users");
const PORT = 3000;

require("dotenv").config();

// データベース接続
mongoose
	.connect(process.env.MONGO_URL)
	.then(() => {
		console.log("DBと接続中・・・");
	})
	.catch((error) => {
		console.log(error);
	});

// ミドルウェア
app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);

app.listen(PORT, () => {
	console.log("サーバーが起動しました");
});
