import {
  GET_ALL_TOUR_GUIDE,
  GET_ALL_TOUR_GUIDE_FAILED,
  GET_ALL_TOUR_GUIDE_SUCCESS,
  FIND_TOURGUIDES_BY_PLACE_AND_DISTRICT,
  FIND_TOURGUIDES_BY_PLACE_AND_DISTRICT_SUCCESS,
  FIND_TOURGUIDES_BY_PLACE_AND_DISTRICT_FAILED,
  ADD_TOUR_GUIDE,
  ADD_TOUR_GUIDE_SUCCESS,
  ADD_TOUR_GUIDE_FAILED,
  GET_PLACE_BY_DISTRICT,
  GET_PLACE_BY_DISTRICT_SUCCESS,
  GET_PLACE_BY_DISTRICT_FAILED,
  DELETE_TOUR_GUIDE,
  DELETE_TOUR_GUIDE_SUCCESS,
  DELETE_TOUR_GUIDE_FAILED,
  EDIT_TOUR_GUIDE,
  EDIT_TOUR_GUIDE_SUCCESS,
  EDIT_TOUR_GUIDE_FAILED,
  FIND_TOUR_GUIDEBY_ID,
  FIND_TOUR_GUIDEBY_ID_SUCCESS,
  FIND_TOUR_GUIDEBY_ID_FAILED,
  EDIT_TOUR_GUIDE_BYTOURGUIDE,
  EDIT_TOUR_GUIDE_BYTOURGUIDE_SUCCESS,
  EDIT_TOUR_GUIDE_BYTOURGUIDE__FAILED,
  FIND_TOUR_GUIDEBY_EMAIL,
  FIND_TOUR_GUIDEBY_EMAIL_SUCCESS,
  FIND_TOUR_GUIDEBY_EMAIL_FAILED,
} from "../../actionType/actionType";

import axios from "axios";
import { url } from "../../api/api";

export const getAllTourGuide = () => async (dispatch) => {
  dispatch({ type: GET_ALL_TOUR_GUIDE });
  try {
    const res = await axios.get(url + `tourguides`);
    dispatch({ type: GET_ALL_TOUR_GUIDE_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_ALL_TOUR_GUIDE_FAILED, payload: error });
  }
};

//By admin tour guide add create delete
export const addTourGuide = (guideData) => async (dispatch, getState) => {
  const email = getState().loginUserReducer.currentUser.email;
  dispatch({ type: ADD_TOUR_GUIDE });
  try {
    const res = await axios.post(url + `tourguide?email=${email}`, guideData);
    dispatch({ type: ADD_TOUR_GUIDE_SUCCESS, payload: res });
  } catch (error) {
    dispatch({ type: ADD_TOUR_GUIDE_FAILED, payload: error });
  }
};
//editTourguide by admin
export const editTourGuide = (id, newtourGuide) => async (dispatch, getState) => {
  const email = getState().loginUserReducer.currentUser.email;
  dispatch({ type: EDIT_TOUR_GUIDE });
  const updataedData = {
    id,
    newtourGuide,
  };
  try {
    const res = await axios.put(url + `tourguide?email=${email}`, updataedData);
    dispatch({ type: EDIT_TOUR_GUIDE_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: EDIT_TOUR_GUIDE_FAILED, payload: error });
  }
};

//deleteTourguide
export const deleteTourGuide = (id) => async (dispatch, getState) => {
  const email = getState().loginUserReducer.currentUser.email;
  dispatch({ type: DELETE_TOUR_GUIDE });
  try {
    const res = await axios.delete(url + `tourguide?id=${id}&email=${email}`);
    dispatch({ type: DELETE_TOUR_GUIDE_SUCCESS, payload: res });
  } catch (error) {
    dispatch({ type: DELETE_TOUR_GUIDE_FAILED, payload: error });
  }
};

export const getPlaceByDistrict = (district) => async (dispatch) => {
  dispatch({ type: GET_PLACE_BY_DISTRICT });
  try {
    const res = await axios.get(url + `tourguide/district?district=${district}`);
    dispatch({ type: GET_PLACE_BY_DISTRICT_SUCCESS, payload: res });
  } catch (error) {
    dispatch({ type: GET_PLACE_BY_DISTRICT_FAILED, payload: error });
  }
};

export const findTourguideByDistrictAndPlace =
  (district, place) => async (dispatch) => {
    dispatch({ type: FIND_TOURGUIDES_BY_PLACE_AND_DISTRICT });

    try {
      const res = await axios.get(
        url + `tourguide/district&place?district=${district}&place=${place}`
      );
      dispatch({
        type: FIND_TOURGUIDES_BY_PLACE_AND_DISTRICT_SUCCESS,
        payload: res,
      });
    } catch (error) {
      dispatch({
        type: FIND_TOURGUIDES_BY_PLACE_AND_DISTRICT_FAILED,
        payload: error,
      });
    }
  };

//findTour By id
export const findTourGuideById = (id) => async (dispatch) => {
  dispatch({ type: FIND_TOUR_GUIDEBY_ID });
  try {
    const res = await axios.get(url + `tourguide?id=${id}`);
    dispatch({ type: FIND_TOUR_GUIDEBY_ID_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: FIND_TOUR_GUIDEBY_ID_FAILED, payload: error });
  }
};
//findTourguide by email
export const findTourGuideByEmail = () => async (dispatch, getState) => {
  const email = getState().loginUserReducer.currentUser.email;
  dispatch({ type: FIND_TOUR_GUIDEBY_EMAIL });
  try {
    const res = await axios.get(url + `tourguide/mail?email=${email}`);
    dispatch({ type: FIND_TOUR_GUIDEBY_EMAIL_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: FIND_TOUR_GUIDEBY_EMAIL_FAILED, payload: error });
  }
};

//editTour guide by Tourguide
export const editTourGuideByGuide = (updataedData) => async (dispatch, getState) => {
  const email = getState().loginUserReducer.currentUser.email;

  dispatch({ type: EDIT_TOUR_GUIDE_BYTOURGUIDE });
  try {
    const res = await axios.put(
      url + `editTourguidebytourguide?email=${email}`,
      updataedData
    );
    dispatch({ type: EDIT_TOUR_GUIDE_BYTOURGUIDE_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: EDIT_TOUR_GUIDE_BYTOURGUIDE__FAILED, payload: error });
  }
};
