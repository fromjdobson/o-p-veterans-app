import React from "react";
import styled from "styled-components";




const StyledRow = styled.div`
  border: solid red 1px;

  position: relative;
  width: 342px;
  height: 128px;
  
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  color: #545454;
`;

const Title = styled.h3`

  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  display: flex;
  align-items: center;
  margin-left: 16px;
`;

const PerkWrapper=styled.div`
  width: 100%;
  height:60px;
  margin-bottom: 8px;
`

const PerkItem = styled.li`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
  margin-left: 16px;
  margin-bottom: 8px;
`;

export default function Dropdown() {

  return (
    <StyledRow>
      <Title>{'Sponsorship perks:'}</Title>
      <PerkWrapper>
        <PerkItem>{'Perk number one'}</PerkItem>
        <PerkItem>{'Perk number two'}</PerkItem>
        <PerkItem>{'Perk number three'}</PerkItem>
      </PerkWrapper>
    </StyledRow>

  );
}
