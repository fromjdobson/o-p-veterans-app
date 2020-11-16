import React from "react";
import styled from "styled-components";
import inputWarningIcon from '../../assets/Icons/input-warning-icon.svg'

const IconContainer = styled.div`
  margin-left: 150px;
`;

export default function WarningIcon() {
  return (
    <IconContainer>
      <img src={inputWarningIcon} alt={'Needs an alt text.'} />
    </IconContainer>
  );
}
