import { connect } from "react-redux";
import { SHOW_APP_DESCRIPTION, showDescription } from "../actions";
import AppSection from "../components/AppSection";

const mapStateToProps = state => {
  return {
    showApp: state.appSection.showApp
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIconClick: app => {
      dispatch(showDescription(app));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppSection);
