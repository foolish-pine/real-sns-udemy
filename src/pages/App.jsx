import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./home/Home";
import { Login } from "./login/Login";
import { Profile } from "./profile/Profile";
import { Register } from "./register/Register";

export const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/profile/:username" element={<Profile />} />
			</Routes>
		</Router>
	);
};
