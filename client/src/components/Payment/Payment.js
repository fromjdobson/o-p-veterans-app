import React from "react";
import styled from "styled-components";
import HelperText from "./HelperText";

const PaymentWrapper = styled.div`
  border: solid green 1px;
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 16px 0px 0px 20px;
  width: 344px;
  height: 200px;
  background: #ffffff;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.14), 0px 2px 2px rgba(0, 0, 0, 0.12),
    0px 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
`;

const Heading = styled.div`
  height: 24px;
  left: 24px;
  right: -666px;
  top: 24px;
  margin-bottom: 32px;

  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 24px;
  /* identical to box height, or 120% */
  display: flex;
  align-items: center;
`;

const Label = styled.caption`
  width: 100px;
  height: 16px;
  left: 0px;
  top: 0px;
  font-family: Open Sans;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  align-items: center;
  letter-spacing: 0.02em;
`;

const InputLine = styled.div`
  border-bottom: solid #545454 1px;
  width: 296px;
  margin-bottom: 20px;
`;

const StyledInput = styled.input`
  box-sizing: border-box;
  margin: 4px 0px 4px 0px;
  padding: 0px 0px 0px 0px;
  width: 100%;
  height: 24px;
  outline: none;
  border: none;
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 24px;
  display: flex;
  align-items: center;
  letter-spacing: 0.01em;
  color: #403926;
  background: none;
`;

export default function Payment() {
  return (
    <PaymentWrapper>
      <Heading>{"Payment"}</Heading>
      <Label>{"Name on Card"}</Label>
      <StyledInput></StyledInput>
      <InputLine></InputLine>
      <HelperText />

      <Label>{"Card number"}</Label>
      <StyledInput></StyledInput>
      <InputLine></InputLine>
      <HelperText />
    </PaymentWrapper>
  );
}
