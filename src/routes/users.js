const router = require("express").Router();
const User = require("../models/User");

// ユーザー情報の更新
router.put("/:id", async (req, res) => {
	if (req.body.userId === req.params.id || req.body.isAdmin) {
		try {
			const user = await User.findByIdAndUpdate(req.params.id, {
				$set: req.body,
			});
			return res.status(200).json(user);
		} catch (error) {
			return res.status(500).json(error);
		}
	} else {
		return res.status(403).json("自身のアカウントの情報のみ更新できます。");
	}
});

// ユーザー情報の削除
router.delete("/:id", async (req, res) => {
	if (req.body.userId === req.params.id || req.body.isAdmin) {
		try {
			const user = await User.findByIdAndDelete(req.params.id);
			res.status(200).json(user);
		} catch (error) {
			return res.status(500).json(error);
		}
	} else {
		return res.status(403).json("自身のアカウントの情報のみ削除できます。");
	}
});

// クエリでユーザー情報を取得
router.get("/", async (req, res) => {
	const userId = req.query.userId;
	const username = req.query.username;
	try {
		const user = userId
			? await User.findById(userId)
			: await User.findOne({ username: username });
		// eslint-disable-next-line no-unused-vars
		const { password, updatedAt, ...others } = user._doc;
		res.status(200).json(others);
	} catch (error) {
		return res.status(500).json(error);
	}
});

// ユーザーのフォロー
router.put("/:id/follow", async (req, res) => {
	if (req.body.userId !== req.params.id) {
		try {
			const user = await User.findById(req.params.id);
			const currentUser = await User.findById(req.body.userId);

			if (!currentUser.followings.includes(req.params.id)) {
				await user.updateOne({
					$push: {
						followers: req.body.userId,
					},
				});
				await currentUser.updateOne({
					$push: {
						followings: req.params.id,
					},
				});
				return res.status(200).json("フォローに成功しました。");
			} else {
				return res
					.status(403)
					.json("あなたは既にこのユーザーをフォローしています。");
			}
		} catch (error) {
			return res.status(500).json(error);
		}
	} else {
		return res.status(500).json("自身はフォローできません。");
	}
});

// ユーザーのフォローをはずす
router.put("/:id/unfollow", async (req, res) => {
	if (req.body.userId !== req.params.id) {
		try {
			const user = await User.findById(req.params.id);
			const currentUser = await User.findById(req.body.userId);

			if (currentUser.followings.includes(req.params.id)) {
				await user.updateOne({
					$pull: {
						followers: req.body.userId,
					},
				});
				await currentUser.updateOne({
					$pull: {
						followings: req.params.id,
					},
				});
				return res.status(200).json("フォロー解除しました。");
			} else {
				return res
					.status(403)
					.json("あなたはこのユーザーをフォローしていません。");
			}
		} catch (error) {
			return res.status(500).json(error);
		}
	} else {
		return res.status(500).json("自身はフォロー解除できません。");
	}
});

module.exports = router;
