import axios from "axios";

export const loginCall = async (user, dispatch) => {
	try {
		dispatch({ type: "LOGIN_START" });
		const response = await axios.post("/api/auth/login", user);

		dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
		localStorage.setItem("email", response.data.email);
		localStorage.setItem("password", response.data.password);
	} catch (e) {
		dispatch({ type: "LOGIN_ERROR", payload: e });
	}
};
