import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../state/AuthContext";
import { Post } from "../post/Post";
import { Share } from "../share/Share";
import "./Timeline.css";

export const Timeline = ({ username }) => {
	const [posts, setPosts] = useState([]);
	const { user } = useContext(AuthContext);

	useEffect(() => {
		const fetchPosts = async () => {
			const response = username
				? await axios.get(`/api/posts/profile/${username}`)
				: await axios.get(`/api/posts/timeline/${user._id}`);
			setPosts(response.data);
		};
		fetchPosts();
	}, [user._id, username]);

	return (
		<div className="timeline">
			<div className="timelineWrapper">
				<Share />
				{posts.map((post) => (
					<Post post={post} key={post._id} />
				))}
			</div>
		</div>
	);
};
