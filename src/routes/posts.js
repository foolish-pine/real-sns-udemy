const router = require("express").Router();
const Post = require("../models/Post");
const User = require("../models/User");

// 投稿を作成する
router.post("/", async (req, res) => {
	const newPost = new Post(req.body);
	try {
		const savedPost = await newPost.save();
		res.status(200).json(savedPost);
	} catch (error) {
		return res.status(500).json(error);
	}
});

// 投稿を更新する
router.put("/:id", async (req, res) => {
	try {
		const post = await Post.findById(req.params.id);

		if (post.userId === req.body.userId) {
			await post.updateOne({
				$set: req.body,
			});
			return res.status(200).json("投稿の編集に成功しました！");
		} else {
			return res.status(403).json("あなたは他の人の投稿を編集できません。");
		}
	} catch (error) {
		return res.status(500).json(error);
	}
});

// 投稿を削除する
router.delete("/:id", async (req, res) => {
	try {
		const post = await Post.findById(req.params.id);

		if (post.userId === req.body.userId) {
			await post.deleteOne();
			return res.status(200).json("投稿の削除に成功しました！");
		} else {
			return res.status(403).json("あなたは他の人の投稿を削除できません。");
		}
	} catch (error) {
		return res.status(500).json(error);
	}
});

// 投稿を取得する
router.get("/:id", async (req, res) => {
	try {
		const post = await Post.findById(req.params.id);

		return res.status(200).json(post);
	} catch (error) {
		return res.status(500).json(error);
	}
});

// 投稿にいいねする・いいねを解除する
router.put("/:id/likes", async (req, res) => {
	try {
		const post = await Post.findById(req.params.id);

		if (!post.likes.includes(req.body.userId)) {
			await post.updateOne({
				$push: {
					likes: req.body.userId,
				},
			});
			return res.status(200).json("いいねしました。");
		} else {
			await post.updateOne({
				$pull: {
					likes: req.body.userId,
				},
			});
			return res.status(200).json("いいねを解除しました。");
		}
	} catch (error) {
		return res.status(500).json(error);
	}
});

// タイムラインの投稿を取得
router.get("/timeline/:userId", async (req, res) => {
	try {
		const currentUser = await User.findById(req.params.userId);
		const userPosts = await Post.find({ userId: currentUser._id });
		const followingsPosts = await Promise.all(
			currentUser.followings.map((followingId) => {
				return Post.find({ userId: followingId });
			})
		);
		return res.status(200).json(userPosts.concat(...followingsPosts));
	} catch (error) {
		return res.status(500).json(error);
	}
});

module.exports = router;
