import { useContext } from "react";
import {
	BrowserRouter as Router,
	Navigate,
	Route,
	Routes,
} from "react-router-dom";
import { AuthContext } from "../state/AuthContext";
import { Home } from "./home/Home";
import { Login } from "./login/Login";
import { Profile } from "./profile/Profile";
import { Register } from "./register/Register";

export const App = () => {
	const { user } = useContext(AuthContext);

	return (
		<Router>
			<Routes>
				<Route path="/" element={user ? <Home /> : <Register />} />
				<Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
				<Route
					path="/register"
					element={user ? <Navigate to="/" /> : <Register />}
				/>
				<Route path="/profile/:username" element={<Profile />} />
			</Routes>
		</Router>
	);
};
