import { Analytics, Face, Gif, Image } from "@mui/icons-material";
import { useContext } from "react";
import { AuthContext } from "../../state/AuthContext";
import "./Share.css";

export const Share = () => {
	const { user } = useContext(AuthContext);

	return (
		<div className="share">
			<div className="shareWrapper">
				<div className="shareTop">
					<img
						src={user.profilePicture || "/assets/person/noAvatar.png"}
						alt=""
						className="shareProfileImg"
					/>
					<input
						type="text"
						className="shareInput"
						placeholder="今何してる？"
					/>
				</div>
				<hr className="shareHr" />
				<div className="shareButtons">
					<div className="shareOptions">
						<div className="shareOption">
							<Image className="shareIcon" htmlColor="blue" />
							<span className="shareOptionsText">写真</span>
						</div>
						<div className="shareOption">
							<Gif className="shareIcon" htmlColor="hotpink" />
							<span className="shareOptionsText">GIF</span>
						</div>
						<div className="shareOption">
							<Face className="shareIcon" htmlColor="green" />
							<span className="shareOptionsText">気持ち</span>
						</div>
						<div className="shareOption">
							<Analytics className="shareIcon" htmlColor="red" />
							<span className="shareOptionsText">投票</span>
						</div>
					</div>
					<button className="shareButton">投稿</button>
				</div>
			</div>
		</div>
	);
};
