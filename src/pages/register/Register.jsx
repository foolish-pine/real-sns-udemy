import axios from "axios";
import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { loginCall } from "../../dispatch";
import { AuthContext } from "../../state/AuthContext";
import "./Register.css";

export const Register = () => {
	const { dispatch } = useContext(AuthContext);

	const username = useRef();
	const email = useRef();
	const password = useRef();
	const passwordConfirmation = useRef();

	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (password.current.value !== passwordConfirmation.current.value) {
			passwordConfirmation.current.setCustomValidity("パスワードが違います。");
		} else {
			try {
				const newUser = {
					username: username.current.value,
					email: email.current.value,
					password: password.current.value,
				};

				await axios.post("http://localhost:3000/api/auth/register", newUser);

				loginCall(
					{
						email: email.current.value,
						password: password.current.value,
					},
					dispatch
				);
				navigate("/");
			} catch (e) {
				console.log(e);
			}
		}
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
						<p className="loginMessage">新規登録はこちらから</p>
						<input
							type="text"
							className="loginInput"
							placeholder="ユーザー名"
							required
							ref={username}
						/>
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
						<input
							type="password"
							className="loginInput"
							placeholder="確認用パスワード"
							required
							minLength="6"
							ref={passwordConfirmation}
						/>
						<button className="loginButton" type="submit">
							サインアップ
						</button>
						<button className="loginRegisterButton">ログイン</button>
					</form>
				</div>
			</div>
		</div>
	);
};
