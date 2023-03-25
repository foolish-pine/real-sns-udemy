import { useRef } from "react";
import "./Login.css";

export const Login = () => {
	const email = useRef();
	const password = useRef();

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<div className="login">
			<div className="loginWrapper">
				<div className="loginLeft">
					<h3 className="loginLogo">Real SNS</h3>
					<span className="loginDesc">本格的なSNSを、自分の手で</span>
				</div>
				<div className="loginRight">
					<form className="loginBox" onSubmit={(e) => handleSubmit(e)}>
						<p className="loginMessage">ログインはこちらから</p>
						<input
							type="email"
							className="loginInput"
							placeholder="メールアドレス"
							required
							ref={email}
						/>
						<input
							type="password"
							className="loginInput"
							placeholder="パスワード"
							required
							minLength="6"
							ref={password}
						/>
						<button className="loginButton">ログイン</button>
						<span className="loginForgot">パスワードを忘れた方へ</span>
						<button className="loginRegisterButton">アカウント作成</button>
					</form>
				</div>
			</div>
		</div>
	);
};
