import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  articleReducer,
  teachersReducer,
  articleUpdateReducer,
  findArticleByIdReducer,
  addArticleReducer,
  deleteArticleReducer,
} from "../reducers/article";

import {
  loginUserReducer,
  registerUserReducer,
  removeUserReducer,
  getAllUserReducer,
} from "../reducers/user";
import { languageReducer } from "../reducers/language";

import {
  getAllTourGuideReducer,
  findGuidesByDistrictAndPlaceReducer,
  addTourGuideReducer,
  getPlaceReducer,
  deleteTourguideReducer,
  editTourguideReducer,
  findTourGuideByIdReducer,
  findTourGuideByEmailReducer,
  editTourguideByGuideReducer,
} from "../reducers/TourGuide";

import {
  getAllreviewReducer,
  addReviewReducer,
  removeReviewReducer,
  updateReviewReducer,
  findReviewByMailReducer,
} from "../reducers/review";

const finalReducers = combineReducers({
  articleReducer: articleReducer,
  teachersReducer: teachersReducer,
  loginUserReducer: loginUserReducer,
  registerUserReducer: registerUserReducer,
  removeUserReducer: removeUserReducer,
  getAllUserReducer: getAllUserReducer,
  articleUpdateReducer: articleUpdateReducer,
  findArticleByIdReducer: findArticleByIdReducer,
  addArticleReducer: addArticleReducer,
  deleteArticleReducer: deleteArticleReducer,
  languageReducer: languageReducer,
  getAllTourGuideReducer: getAllTourGuideReducer,
  addTourGuideReducer: addTourGuideReducer,
  findGuidesByDistrictAndPlaceReducer: findGuidesByDistrictAndPlaceReducer,
  getPlaceReducer: getPlaceReducer,
  deleteTourguideReducer: deleteTourguideReducer,
  editTourguideReducer: editTourguideReducer,
  findTourGuideByIdReducer: findTourGuideByIdReducer,
  editTourguideByGuideReducer: editTourguideByGuideReducer,
  findTourGuideByEmailReducer: findTourGuideByEmailReducer,
  getAllreviewReducer: getAllreviewReducer,
  addReviewReducer: addReviewReducer,
  removeReviewReducer: removeReviewReducer,
  updateReviewReducer: updateReviewReducer,
  findReviewByMailReducer: findReviewByMailReducer,
});

export const currentUser = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser"))
  : [];

const initialReducer = {
  loginUserReducer: {
    currentUser: currentUser,
  },
};
const composeEnhancers = composeWithDevTools({});

const store = createStore(
  finalReducers,
  initialReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
