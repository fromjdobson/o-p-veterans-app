import React from "react";
import styled from "styled-components";

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  
  width: 369px;
  height: 40px;
  padding: 0px 0px 0px 0px;
  box-sizing: border-box;
  
`;

const PrimaryButton = styled.button`
  width: 216px;
  height: 40px;
  // left: 0px;
  // bottom: 0px;
  padding: 4px 16px;
  color: #F4B860;
  background: #6b7346;
  border: 2px solid #f4b860;
  box-sizing: border-box;
  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.14), 0px 3px 14px rgba(0, 0, 0, 0.12),
    0px 4px 5px rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  font-size: 24px;
  margin-right: 10px;
`;

const SecondaryButton = styled.button`
  width: 216px;
  height: 40px;
  // left: 0px;
  // bottom: 0px;

  background: #f4b860;
  border: 2px solid #f4b860;
  box-sizing: border-box;
  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.14), 0px 3px 14px rgba(0, 0, 0, 0.12),
    0px 4px 5px rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  font-size: 24px;
  margin-left: 10px;
`;

export default function Button() {
  // const { clickFunc } = props;
  return (
    <ButtonContainer>
      <PrimaryButton>JOIN</PrimaryButton>
      <SecondaryButton>SIGN IN</SecondaryButton>
    </ButtonContainer>
  );
}
