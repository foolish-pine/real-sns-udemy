import axios from "axios";
import { createContext, useReducer } from "react";
import { AuthReducer } from "./AuthReducer";

const initialState = {
	user: null,
	isFetching: false,
	error: false,
};

const email = localStorage.getItem("email");
const password = localStorage.getItem("password");

if (email && password) {
	const response = await axios.post("http://localhost:3000/api/auth/login", {
		email,
		password,
	});
	initialState.user = response.data;
}

export const AuthContext = createContext(initialState);

export const AuthContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AuthReducer, initialState);

	return (
		<AuthContext.Provider
			value={{
				user: state.user,
				isFetching: state.isFetching,
				error: state.error,
				dispatch,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
