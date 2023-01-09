import { Chat, Search, Notifications } from "@mui/icons-material";
import { Link } from "react-router-dom";
import "./TopBar.css";

export const TopBar = () => {
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
					<img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
				</div>
			</div>
		</div>
	);
};
