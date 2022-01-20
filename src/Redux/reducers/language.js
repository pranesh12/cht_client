import { CHANGE_TO_CHAKMALANGUAGE } from "../../actionType/actionType";

export const languageReducer = (state = {}, action) => {
  switch (action.type) {
    case CHANGE_TO_CHAKMALANGUAGE:
      return {
        ...state,
        changeToChakmaLange: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
