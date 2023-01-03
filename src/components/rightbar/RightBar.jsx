import "./RightBar.css";

export const RightBar = () => {
	return (
		<div className="rightbar">
			<div className="rightbarWrapper">
				<div className="eventContainer">
					<img src="/assets/star.png" alt="" className="starImg" />
					<span className="eventText">
						<b>フォロワー限定イベント開催中</b>
					</span>
				</div>
				<img src="/assets/event.jpeg" alt="" className="eventImg" />
				<h4 className="rightbarTitle">オンラインの友達</h4>
				<ul className="rightbarFriendList">
					<li className="rightbarFriend">
						<div className="rightbarProfileImgContainer">
							<img
								src="/assets/person/1.jpeg"
								alt=""
								className="rightbarProfileImg"
							/>
							<span className="rightbarOnline"></span>
						</div>
						<span className="rightbarUsername">Pine</span>
					</li>
				</ul>
				<p className="promotionTitle">プロモーション広告</p>
				<img
					src="/assets/promotion/promotion1.jpeg"
					alt=""
					className="rightbarPromotionImg"
				/>
				<p className="promotionName">ショッピング</p>
				<img
					src="/assets/promotion/promotion2.jpeg"
					alt=""
					className="rightbarPromotionImg"
				/>
				<p className="promotionName">カーショップ</p>
				<img
					src="/assets/promotion/promotion3.jpeg"
					alt=""
					className="rightbarPromotionImg"
				/>
				<p className="promotionName">Pine株式会社</p>
			</div>
		</div>
	);
};
