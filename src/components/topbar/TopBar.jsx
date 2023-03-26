import { Chat, Search, Notifications } from "@mui/icons-material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../state/AuthContext";
import "./TopBar.css";

export const TopBar = () => {
	const { user } = useContext(AuthContext);

	return (
		<div className="topbarContainer">
			<div className="topbarLeft">
				<Link to="/" style={{ textDecoration: "none", color: "black" }}>
					<span className="logo">Real SNS</span>
				</Link>
			</div>
			<div className="topbarCenter">
				<div className="searchBar">
					<Search className="searchIcon" />
					<input
						type="text"
						className="searchInput"
						placeholder="探しものは何ですか？"
					/>
				</div>
			</div>
			<div className="topbarRight">
				<div className="topbarItemIcons">
					<div className="topbarIconItem">
						<Chat />
						<span className="topbarIconBadge">1</span>
					</div>
					<div className="topbarIconItem">
						{" "}
						<Notifications />
						<span className="topbarIconBadge">2</span>
					</div>
					<Link to={`/profile/${user.username}`}>
						<img
							src={user.profilePicture || "/assets/person/noAvatar.png"}
							alt=""
							className="topbarImg"
						/>
					</Link>
				</div>
			</div>
		</div>
	);
};
