const express = require("express");
const app = express();
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const userRoute = require("./routes/users");
const PORT = 3000;

// ミドルウェア
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);

app.listen(PORT, () => {
	console.log("サーバーが起動しました");
});
