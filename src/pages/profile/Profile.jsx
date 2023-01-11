import { RightBar } from "../../components/rightbar/RightBar";
import { SideBar } from "../../components/sidebar/SideBar";
import { Timeline } from "../../components/timeline/Timeline";
import { TopBar } from "../../components/topbar/TopBar";

import "./Profile.css";

export const Profile = () => {
	return (
		<>
			<TopBar />
			<div className="profile">
				<SideBar />
				<div className="profileRight">
					<div className="profileRightTop">
						<div className="profileCover">
							<img
								src="/assets/post/3.jpeg"
								alt=""
								className="profileCoverImg"
							/>
							<img
								src="/assets/person/1.jpeg"
								alt=""
								className="profileUserImg"
							/>
						</div>
						<div className="profileInfo">
							<h4 className="profileInfoName">Pine</h4>
							<span className="profileInfoDesc">プロフィール文 です。</span>
						</div>
					</div>
					<div className="profileRightBottom">
						<Timeline username="foolish-pine" />
						<RightBar profile />
					</div>
				</div>
			</div>
		</>
	);
};
