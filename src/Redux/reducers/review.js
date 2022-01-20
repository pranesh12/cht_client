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

export const getAllreviewReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_REVIEWS:
      return {
        ...state,
        loading: true,
      };
    case GET_REVIEWS_SUCCESS:
      return {
        ...state,
        loading: false,
        fetchData: action.payload,
      };
    case GET_REVIEWS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export const addReviewReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_REVIEW:
      return {
        ...state,
        loading: true,
      };
    case ADD_REVIEW_SUCCESS:
      return {
        ...state,
        loading: false,
        fetchData: action.payload,
      };
    case ADD_REVIEW_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export const removeReviewReducer = (state = {}, action) => {
  switch (action.type) {
    case REMOVE_REVIEW:
      return {
        ...state,
        loading: true,
      };
    case REMOVE_REVIEW_SUCCESS:
      return {
        ...state,
        loading: false,
        fetchData: action.payload,
      };
    case REMOVE_REVIEW_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export const updateReviewReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_REVIEW:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_REVIEW_SUCCESS:
      return {
        ...state,
        loading: false,
        fetchData: action.payload,
      };
    case UPDATE_REVIEW_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export const findReviewByMailReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_REVIEW_BYMAIL:
      return {
        ...state,
        loading: true,
      };
    case GET_REVIEW_BYMAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        fetchData: action.payload,
      };
    case GET_REVIEW_BYMAIL_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
