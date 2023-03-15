import { setType } from "./index";

export const setTypeAction = (type) => (dispatch) => {
  dispatch(setType(type));
};
