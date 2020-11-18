import React from "react";
import styled from "styled-components";
import googleIcon from '../../assets/Icons/google-icon.svg'

const StyledButton = styled.button`
  width: 312px;
  height: 40px;
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 0.01em;
  color: #FFFFFF;
  background: #618572;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.14), 0px 3px 4px rgba(0, 0, 0, 0.12), 0px 1px 5px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  border: 2px solid #618572;

  &:hover {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.14), 0px 4px 5px rgba(0, 0, 0, 0.12), 0px 1px 10px rgba(0, 0, 0, 0.2);
  }

  & > img {
    margin-left: 8px;
    width: 24px;
    height: 24px;
    display: none;
    border: 1px solid white;
  }
`

export default function Button(props) {
  const { buttonStyle, buttonText } = props
  console.log(buttonStyle)

  return (
      <StyledButton>{buttonText}<img src={googleIcon} alt={'Google'} /></StyledButton>
  )
}