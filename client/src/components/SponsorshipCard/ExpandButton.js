import React from 'react'
import styled from 'styled-components'


 import closedIcon from "../../assets/icons/closed-card-icon.svg";
 import openIcon from "../../assets/icons/card-open-icon.svg";

const RowContainer = styled.div`
  border: solid 1px red;
  display: flex;
  width: 342px;
  height: 48px;
  align-items: center;
  margin: 24px 0 0 0;
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

export default function ExpandButton() {
    return (
        <RowContainer>
            <DropdownBtn>{'Expand for perks'}</DropdownBtn>
            <img src={closedIcon}/>
        </RowContainer>
    )
}