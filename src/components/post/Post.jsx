import { MoreVert } from "@mui/icons-material";
import { useState } from "react";
import { Users } from "../../dummyData";
import "./Post.css";

export const Post = ({ post }) => {
	const user = Users.filter((user) => user.id === post.userId)[0];

	const [likes, setLikes] = useState(post.like);
	const [isLiked, setIsLiked] = useState(false);
	const handleLikes = () => {
		setLikes(isLiked ? (like) => like - 1 : (like) => like + 1);
		setIsLiked(!isLiked);
	};

	return (
		<div className="post">
			<div className="postWrapper">
				<div className="postTop">
					<div className="postTopLeft">
						<img src={user.profilePicture} alt="" className="postProfileImg" />
						<span className="postUsername">{user.username}</span>
						<span className="postDate">{post.date}</span>
					</div>
					<div className="postTopRight">
						<MoreVert />
					</div>
				</div>
				<div className="postCenter">
					<span className="postText">{post.desc}</span>
					<img src={post.photo} alt="" className="postImg" />
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
