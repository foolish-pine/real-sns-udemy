const router = require("express").Router();
const multer = require("multer");

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "public/images");
	},
	filename: (req, file, cb) => {
		cb(null, req.body.name);
	},
});
const upload = multer({ storage });

// ユーザー登録
router.post("/", upload.single("file"), async (req, res) => {
	try {
		return res.status(200).json("画像アップロードに成功しました！");
	} catch (error) {
		console.log(error);
	}
});

module.exports = router;
