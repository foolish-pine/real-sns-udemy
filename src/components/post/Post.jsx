import { MoreVert } from "@mui/icons-material";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { format } from "timeago.js";
import { AuthContext } from "../../state/AuthContext";
import "./Post.css";

export const Post = ({ post }) => {
	const { user: currentUser } = useContext(AuthContext);
	const [likes, setLikes] = useState(post.likes.length);
	const [isLiked, setIsLiked] = useState(post.likes.includes(currentUser._id));
	const [user, setUser] = useState({});

	useEffect(() => {
		const fetchUser = async () => {
			const response = await axios.get(`/api/users?userId=${post.userId}`);
			setUser(response.data);
		};
		fetchUser();
	}, [post.userId]);

	const handleLikes = async () => {
		try {
			await axios.put(`/api/posts/${post._id}/likes`, {
				userId: currentUser._id,
			});
			setLikes(isLiked ? (like) => like - 1 : (like) => like + 1);
			setIsLiked(!isLiked);
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<div className="post">
			<div className="postWrapper">
				<div className="postTop">
					<div className="postTopLeft">
						<Link to={`/profile/${user.username}`}>
							<img
								src={user.profilePicture || "/assets/person/noAvatar.png"}
								alt=""
								className="postProfileImg"
							/>
						</Link>
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
