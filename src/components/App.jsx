import React, { Component } from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";

import Header from "./Header";
import AppSectionContainer from "../containers/AppSectionContainer";
import { translate, Trans } from 'react-i18next';

import media from "../utils/mediaHandler.js";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  width: 100%;
  height: auto;
  min-width: 300px;
  margin: auto;
  background-color: #f2f2f2;

  ${media.tablet`padding: 1rem`};
`;

const Footer = styled.footer`
  padding: 1rem;
  font-size: 1rem;
  ${media.tablet`display:none;`};
`;


class App extends Component {
  render() {
    const {t, i18n} = this.props;

    return (
      <AppContainer>
        <Header />
        <AppSectionContainer />
        <Footer>{t('footer')}</Footer>
      </AppContainer>
    );
  }
}

export default translate('translations')(App);
