import { MoreVert } from "@mui/icons-material";
import axios from "axios";
import { useEffect, useState } from "react";
import { format } from "timeago.js";
import "./Post.css";

export const Post = ({ post }) => {
	const [likes, setLikes] = useState(post.likes.length);
	const [isLiked, setIsLiked] = useState(false);
	const [user, setUser] = useState({});

	useEffect(() => {
		const fetchUser = async () => {
			const response = await axios.get(`/api/users/${post.userId}`);
			setUser(response.data);
		};
		fetchUser();
	}, []);

	const handleLikes = () => {
		setLikes(isLiked ? (like) => like - 1 : (like) => like + 1);
		setIsLiked(!isLiked);
	};

	return (
		<div className="post">
			<div className="postWrapper">
				<div className="postTop">
					<div className="postTopLeft">
						<img
							src={user.profilePicture || "/assets/person/noAvatar.png"}
							alt=""
							className="postProfileImg"
						/>
						<span className="postUsername">{user.username}</span>
						<span className="postDate">{format(post.createdAt)}</span>
					</div>
					<div className="postTopRight">
						<MoreVert />
					</div>
				</div>
				<div className="postCenter">
					<span className="postText">{post.desc}</span>
					<img src={"/assets/" + post.img} alt="" className="postImg" />
				</div>
				<div className="postBottom">
					<div className="postBottomLeft">
						<img
							src="/assets/heart.png"
							alt=""
							className="likeIcon"
							onClick={handleLikes}
						/>
						<span className="postLikeCounter">
							{likes}人がいいねを押しました
						</span>
					</div>
					<div className="postBottomRight">
						<span className="postCommentText">{post.comment}:コメント</span>
					</div>
				</div>
			</div>
		</div>
	);
};
