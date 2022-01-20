import {
  GET_REVIEWS,
  GET_REVIEWS_SUCCESS,
  GET_REVIEWS_FAILED,
  ADD_REVIEW,
  ADD_REVIEW_SUCCESS,
  ADD_REVIEW_FAILED,
  REMOVE_REVIEW,
  REMOVE_REVIEW_SUCCESS,
  REMOVE_REVIEW_FAILED,
  UPDATE_REVIEW,
  UPDATE_REVIEW_SUCCESS,
  UPDATE_REVIEW_FAILED,
  GET_REVIEW_BYMAIL,
  GET_REVIEW_BYMAIL_SUCCESS,
  GET_REVIEW_BYMAIL_FAILED,
} from "../../actionType/actionType";
import { url } from "../../api/api";

import axios from "axios";

export const getAllReview = () => async (dispatch) => {
  dispatch({ type: GET_REVIEWS });
  try {
    const res = await axios.get(url + `reviews`);
    dispatch({ type: GET_REVIEWS_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_REVIEWS_FAILED, payload: error });
  }
};

//Adding new Review
export const addReview = (reviewData) => async (dispatch, getState) => {
  const email = getState().loginUserReducer.currentUser.email;
  const userName = getState().loginUserReducer.currentUser.name;

  dispatch({ type: ADD_REVIEW });
  try {
    const res = await axios.post(
      url + `review?email=${email}&name=${userName}`,
      reviewData
    );
    dispatch({ type: ADD_REVIEW_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: ADD_REVIEW_FAILED, payload: error });
  }
};

//Updating review
export const updateReview = (reviewData) => async (dispatch, getState) => {
  const email = getState().loginUserReducer.currentUser.email;
  const userName = getState().loginUserReducer.currentUser.name;

  dispatch({ type: UPDATE_REVIEW });
  try {
    const res = await axios.put(
      url + `review?email=${email}&name=${userName}`,
      reviewData
    );
    dispatch({ type: UPDATE_REVIEW_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: UPDATE_REVIEW_FAILED, payload: error });
  }
};

//removoving review
export const removeReview = () => async (dispatch, getState) => {
  const email = getState().loginUserReducer.currentUser.email;
  dispatch({ type: REMOVE_REVIEW });
  try {
    const res = await axios.delete(url + `review?email=${email}`);
    dispatch({ type: REMOVE_REVIEW_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: REMOVE_REVIEW_FAILED, payload: error });
  }
};

//find review by email

export const findReviewbyMail = () => async (dispatch, getState) => {
  const email = getState().loginUserReducer.currentUser.email;
  dispatch({ type: GET_REVIEW_BYMAIL });
  try {
    const res = await axios.get(url + `review?email=${email}`);
    dispatch({ type: GET_REVIEW_BYMAIL_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_REVIEW_BYMAIL_FAILED, payload: error });
  }
};
