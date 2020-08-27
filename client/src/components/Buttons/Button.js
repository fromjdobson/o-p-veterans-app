import React from "react";
import styled from "styled-components";

const ButtonContainer = styled.div`
  width: 169px;
  height: 40px;
  padding: 0px 0px 0px 0px;
  box-sizing: border-box;
`;

const PrimaryButton = styled.button`
  position: absolute;
  width: 216px;
  height: 40px;
  left: 0px;
  bottom: 0px;

  background: #6b7346;
  border: 2px solid #f4b860;
  box-sizing: border-box;
  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.14), 0px 3px 14px rgba(0, 0, 0, 0.12),
    0px 4px 5px rgba(0, 0, 0, 0.2);
  border-radius: 2px;
`;

const SecondaryButton = styled.button`
  position: absolute;
  width: 216px;
  height: 40px;
  left: 0px;
  bottom: 0px;

  background: #f4b860;
  border: 2px solid #f4b860;
  box-sizing: border-box;
  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.14), 0px 3px 14px rgba(0, 0, 0, 0.12),
    0px 4px 5px rgba(0, 0, 0, 0.2);
  border-radius: 2px;
`;

export default function Button(props) {
  const { text, clickFunc } = props;
  return (
    <ButtonContainer>
      <PrimaryButton onCLick={clickFunc}>{text}</PrimaryButton>
      <SecondaryButton onCLick={clickFunc}>{text}</SecondaryButton>
    </ButtonContainer>
  );
}
