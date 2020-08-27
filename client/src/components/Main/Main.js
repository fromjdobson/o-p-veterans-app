import React from "react";
import styled from "styled-components";

const MainPage = styled.div`
  display: flex;
  justify-content: center;
  width: 704px;
  height: 784px;

  /* Other Colors/Pastel Gray */

  background: #dad3c1;
  /* Drop Shadow/2 dp */

  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.14), 0px 3px 4px rgba(0, 0, 0, 0.12),
    0px 1px 5px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
`;

const InputLabel = styled.label`
  display: flex;
  align-items: center;
  margin: 0px;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  box-sizing: border-box;
`;

const StyledInput = styled.input`
  margin: 8px 0px 0px 0px;
  width: 255px;
  height: 32px;
  box-sizing: border-box;
  border: 1px solid black;
  font-size: 18px;
  display: flex;
  align-items: center;
`;

export default function Main(props) {
  const { label } = props;
  return (
    <MainPage>
      
        <InputLabel>{label}</InputLabel>
        <StyledInput></StyledInput>
      
    </MainPage>
  );
}
