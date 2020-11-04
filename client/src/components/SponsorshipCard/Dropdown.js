import React from "react";
import styled from "styled-components";
import closedIcon from "../../assets/icons/closed-card-icon.svg";
import openIcon from '../../assets/icons/card-open-icon.svg'

const PerkContainer = styled.div`
  border: solid 1px red;
  display: flex;
  width: 342px;
  margin-top: 24px;
`;

const DropdownBtn = styled.h4`
  border: solid 1px yellow;
  width: 180px;
  height: 24px;
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 24px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 14px;
  color: #799c8a;
`;

const Title = styled.h6`
  border: 1px solid green;
  position: relative;
  width: 312px;
  height: 24px;
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #545454;
`;

export default function Dropdown(props) {

const { iconStatus }= props

function setIcon(status) {
  if (status === 'closed') {
    return <img src={closedIcon} />
  }else if (status === 'open') {
    return <img  src={openIcon} />
  }
}

  return (
    <PerkContainer>
      <DropdownBtn>
        Expand for Perks
      </DropdownBtn>
      <img  />
    </PerkContainer>
  );
}