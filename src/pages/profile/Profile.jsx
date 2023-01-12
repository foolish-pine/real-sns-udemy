import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RightBar } from "../../components/rightbar/RightBar";
import { SideBar } from "../../components/sidebar/SideBar";
import { Timeline } from "../../components/timeline/Timeline";
import { TopBar } from "../../components/topbar/TopBar";

import "./Profile.css";

export const Profile = () => {
	const [user, setUser] = useState({});
	const username = useParams().username;

	useEffect(() => {
		const fetchUser = async () => {
			const response = await axios.get(`/api/users?username=${username}`);
			setUser(response.data);
		};
		fetchUser();
	}, [username]);

	return (
		<>
			<TopBar />
			<div className="profile">
				<SideBar />
				<div className="profileRight">
					<div className="profileRightTop">
						<div className="profileCover">
							<img
								src={user.coverPicture || "/assets/post/3.jpeg"}
								alt=""
								className="profileCoverImg"
							/>
							<img
								src={user.profilePicture || "/assets/person/noAvatar.png"}
								alt=""
								className="profileUserImg"
							/>
						</div>
						<div className="profileInfo">
							<h4 className="profileInfoName">{user.username}</h4>
							<span className="profileInfoDesc">{user.desc}</span>
						</div>
					</div>
					<div className="profileRightBottom">
						<Timeline username={username} />
						<RightBar user={user} />
					</div>
				</div>
			</div>
		</>
	);
};
