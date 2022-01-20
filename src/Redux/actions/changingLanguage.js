import { CHANGE_TO_CHAKMALANGUAGE } from "../../actionType/actionType";

export const changeLanguage = (bool) => async (dispatch) => {
  console.log(bool);
  dispatch({ type: CHANGE_TO_CHAKMALANGUAGE, payload: bool });
};
