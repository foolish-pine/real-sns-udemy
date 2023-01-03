import { RightBar } from "../../components/rightbar/RightBar";
import { SideBar } from "../../components/sidebar/SideBar";
import { Timeline } from "../../components/timeline/Timeline";
import { TopBar } from "../../components/topbar/TopBar";

import "./Home.css";

export const Home = () => {
	return (
		<>
			<TopBar />
			<div className="homeContainer">
				<SideBar />
				<Timeline />
				<RightBar />
			</div>
		</>
	);
};
