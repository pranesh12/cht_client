import axios from "axios";
import {
  FETCH_ARTICLE_DATA,
  FETCH_ARTICLE_DATA_SUCCESS,
  FETCH_ARTICLE_DATA_FAILED,
  Add_ARTICLE_DATA,
  Add_ARTICLE_DATA_SUCCESS,
  Add_ARTICLE_DATA_FAILED,
  DELETE_ARTICLE_DATA,
  DELETE_ARTICLE_DATA_FAILED,
  DELETE_ARTICLE_DATA_SUCCESS,
  FIND_DATA_BYID,
  FIND_DATA_BYID_SUCCESS,
  FIND_DATA_BYID_FAILED,
  UPDATE_ARTICLE_DATA,
  UPDATE_ARTICLE_DATA_SUCCESS,
  UPDATE_ARTICLE_DATA_FAILED,
} from "../../actionType/actionType";

import { url } from "../../api/api";
import { headers } from "../../util/token";

export const getArticleData = () => async (dispatch) => {
  dispatch({ type: FETCH_ARTICLE_DATA });
  console.log(headers);
  try {
    const res = await axios.get(url + `articles`, headers);
    dispatch({ type: FETCH_ARTICLE_DATA_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: FETCH_ARTICLE_DATA_FAILED, payload: error });
  }
};

export const addArticleData = (data) => async (dispatch, getState) => {
  const email = getState().loginUserReducer.currentUser.email;
  dispatch({ type: Add_ARTICLE_DATA });
  try {
    const res = await axios.post(url + `article?email=${email}`, data);
    dispatch({ type: Add_ARTICLE_DATA_SUCCESS, payload: res.data });
    window.location = `/admin`;
  } catch (error) {
    dispatch({ type: Add_ARTICLE_DATA_FAILED, payload: error });
  }
};

export const deleteArticle = (id) => async (dispatch, getState) => {
  const email = getState().loginUserReducer.currentUser.email;
  dispatch({ type: DELETE_ARTICLE_DATA });
  try {
    const res = await axios.delete(url + `article?id=${id}&email=${email}`);
    dispatch({ type: DELETE_ARTICLE_DATA_SUCCESS, payload: res.data });
    window.location = "/admin";
  } catch (error) {
    dispatch({ type: DELETE_ARTICLE_DATA_FAILED, payload: error });
  }
};

export const findArticleById = (id) => async (dispatch) => {
  dispatch({ type: FIND_DATA_BYID });
  try {
    const res = await axios.get(url + `article?id=${id}`);
    dispatch({ type: FIND_DATA_BYID_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: FIND_DATA_BYID_FAILED, payload: error });
  }
};

export const updateArticle = (id, newData) => async (dispatch, getState) => {
  const email = getState().loginUserReducer.currentUser.email;
  dispatch({ type: UPDATE_ARTICLE_DATA });
  const updataedData = {
    id,
    newData,
  };

  try {
    const res = await axios.put(url + `article?email=${email}`, updataedData);
    dispatch({ type: UPDATE_ARTICLE_DATA_SUCCESS, payload: res.data });
    window.location = "/admin";
  } catch (error) {
    dispatch({ type: UPDATE_ARTICLE_DATA_FAILED, payload: error });
  }
};
