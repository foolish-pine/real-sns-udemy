import { Posts } from "../../dummyData";
import { Post } from "../post/Post";
import { Share } from "../share/Share";
import "./Timeline.css";

export const Timeline = () => {
	return (
		<div className="timeline">
			<div className="timelineWrapper">
				<Share />
				{Posts.map((post) => (
					<Post post={post} key={post.id} />
				))}
			</div>
		</div>
	);
};
