import React from "react";
import styled from "styled-components";

const SectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color:#ffffff;
  margin-top:1rem;
`;

const Icon = styled.img`
  height:4rem;
  vertical-align: text-bottom;
`;

const Description = styled.div`
  height:4rem;
  font-size: 1.5rem;
  font-weight: bold;
  padding:1rem;
  
  
`;

const DescriptionSection = ({ match, location }) => {
  
  return (
    <SectionContainer>
      <Icon src={location.state.icon} />
      <Description>
        Description of {location.state.name}
      </Description>
    </SectionContainer>
  );
};
export default DescriptionSection;
