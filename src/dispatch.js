import axios from "axios";

export const loginCall = async (user, dispatch) => {
	try {
		dispatch({ type: "LOGIN_START" });
		const response = await axios.post(
			"http://localhost:3000/api/auth/login",
			user
		);
		dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
	} catch (e) {
		dispatch({ type: "LOGIN_ERROR", payload: e });
	}
};
