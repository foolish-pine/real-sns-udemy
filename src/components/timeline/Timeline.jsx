import axios from "axios";
import { useEffect, useState } from "react";
import { Post } from "../post/Post";
import { Share } from "../share/Share";
import "./Timeline.css";

export const Timeline = () => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const fetchPosts = async () => {
			const response = await axios.get(
				"/api/posts/timeline/63b103e05b3e510457afddb6"
			);
			setPosts(response.data);
		};
		fetchPosts();
	}, []);

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
