import React, { useReducer } from "react";
import AuthContext from "./AuthContext";
import AuthReducer from "./AuthReducer";
import setAuthToken from "../../utils/setAuthToken";
import { USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL } from "../types";
import axios from "axios";

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    isAuth: null,
    user: null,
    loading: true,
    error: null,
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  // Load User
  const loadUser = async () => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    try {
      const res = await axios.get(
        "http://localhost:3000/api/recruitment/positions.json"
      );
      console.log(res.data.result2[0]);
      dispatch({ type: USER_LOADED, payload: res.data.result2[0] });
    } catch (err) {
      dispatch({ type: AUTH_ERROR });
    }
  };

  // Login User
  const login = async (formData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios
        .post("http://localhost:3000/users/login", formData, config)
        .then((response) => {
          if (response.data.data) {
            localStorage.setItem("token", response.data.token);

            dispatch({
              type: LOGIN_SUCCESS,
              payload: response.data,
            });

            loadUser();
          } else {
            alert("Login tidak berhasil");
          }
        });

      loadUser();
    } catch (err) {
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response.data.msg,
      });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuth: state.isAuth,
        loading: state.loading,
        user: state.user,
        error: state.error,
        login,
        loadUser,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
