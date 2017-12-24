import styled from "styled-components";
import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Link, Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import myLoadable from "../utils/myLoadable";
import media from "../utils/mediaHandler";

const AppListContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;

  ${media.tablet`width: initial;`}
`;

const Item = styled.div`
  width: 33.3%;
  cursor: pointer;
  ${media.tablet`width: 8rem;`}
`;

const AsyncDescriptionSection = myLoadable({
  loader: () => import("./DescriptionSection")
});



const Header = () => <div>This is head</div>;

const AppSection = ({ showApp, onIconClick }) => {
  return (
    <div>
      <AppListContainer>
        My notes
      </AppListContainer>
      <Route path="/apps/:name" component={AsyncDescriptionSection} />

      {/* {showApp && <AsyncDescriptionSection app={showApp}/>}  */}
    </div>
  );
};
export default AppSection;
