import { SHOW_APP_DESCRIPTION, showDescription } from "../actions";

const appSection = (state = {showApp:null}, action) => {
  switch (action.type) {
    case SHOW_APP_DESCRIPTION:
      return Object.assign({}, state, {
            showApp:action.name
          });
    default:
      return state;
  }
};

export default appSection;
