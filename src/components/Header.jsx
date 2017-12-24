import styled from "styled-components";
import React, { PureComponent } from "react";

import icon from "../resources/assets/pac-man.svg";
import media from "../utils/mediaHandler.js";

const HeaderContainer = styled.div`
  display: flex;
  flex-directon: column;
  flex-wrap: wrap;
  align-items: center;
  margin: auto;
`;
const Icon = styled.img`
  max-width: 8rem;
  margin: 1rem auto;
`;

const Title = styled.span`
  font-size: 1.5rem;
  text-align: center;
  font-weight: bold;
  padding: 1rem;
  background-color: #4da6ff;

  ${media.tablet`background-color: initial;`}
`;

class Header extends PureComponent {
  render() {
    return (
      <HeaderContainer>
        <Icon src={icon} />
        <Title>the starter project bootstrapped with Create React App</Title>
      </HeaderContainer>
    );
  }
}

export default Header;
