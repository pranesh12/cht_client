import axios from "axios";
import {
  LOGIN_USER,
  REGISTER_USER,
  LOGIN_USER_SUCCESS,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILED,
  LOGIN_USER_FAILED,
  GET_USER,
  GET_USER_DATA_FAILED,
  GET_USER_SUCCESS,
  DELETE_USER_ACCOUNT,
  DELETE_ARTICLE_DATA_FAILED,
  DELETE_ARTICLE_DATA_SUCCESS,
} from "../../actionType/actionType";
import { url } from "../../api/api";

export const registerUser = (registerData, guide) => async (dispatch) => {
  const combinedata = {
    registerData,
    guide,
  };
  dispatch({ type: REGISTER_USER });
  try {
    const res = await axios.post(url + `register`, combinedata);
    dispatch({ type: REGISTER_USER_SUCCESS, payload: res.data });
    localStorage.setItem("currentUser", JSON.stringify(res.data));
    // window.location = "/";
  } catch (error) {
    dispatch({ type: REGISTER_USER_FAILED, payload: error.message });
  }
};

export const loginUser = (logindata) => async (dispatch) => {
  dispatch({ type: LOGIN_USER });
  try {
    const res = await axios.post(url + `login`, logindata);
    dispatch({ type: LOGIN_USER_SUCCESS, payload: res.data });

    localStorage.setItem("currentUser", JSON.stringify(res.data));
  } catch (error) {
    dispatch({ type: LOGIN_USER_FAILED, payload: error.message });
  }
};

export const getAllUserData = () => async (dispatch, getState) => {
  const email = getState().loginUserReducer.currentUser.email;
  dispatch({ type: GET_USER });
  try {
    const res = await axios.get(url + `userList?email=${email}`);
    dispatch({ type: GET_USER_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_USER_DATA_FAILED, payload: error });
  }
};

export const removeUserAccount = (id) => async (dispatch, getState) => {
  const email = getState().loginUserReducer.currentUser.email;
  dispatch({ type: DELETE_USER_ACCOUNT });
  try {
    const res = await axios.delete(url + `removeAccount?id=${id}&email=${email}`);
    dispatch({ type: DELETE_ARTICLE_DATA_SUCCESS, payload: res.data });
    window.location = `/admin`;
  } catch (error) {
    dispatch({ type: DELETE_ARTICLE_DATA_FAILED, payload: error });
  }
};

export const logoutUser = () => () => {
  localStorage.removeItem("currentUser");
  window.location = "/";
};
