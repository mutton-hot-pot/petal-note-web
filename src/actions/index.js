import { push } from "react-router-redux";
//action type
export const SHOW_APP_DESCRIPTION = "SHOW_APP_DESCRIPTION";

//action creators
export const showDescription = app => {
  return dispatch => {
    const location = {
      pathname: `/apps/${app.name}`,
      state: app
    };
    dispatch(push(location));
    dispatch({
      type: SHOW_APP_DESCRIPTION,
      name: app.name
    });
  };
};
