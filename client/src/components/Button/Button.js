import React from "react";
import styled from "styled-components";
import { setButtonStyle } from './utils'
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
  color: ${props => props.color};
  background: ${props => props.background};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.14), 0px 3px 4px rgba(0, 0, 0, 0.12), 0px 1px 5px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  border: ${props => props.border};
  outline: none;

  &:hover {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.14), 0px 4px 5px rgba(0, 0, 0, 0.12), 0px 1px 10px rgba(0, 0, 0, 0.2);
  }

  & > img {
    margin-left: 8px;
    width: 24px;
    height: 24px;
    border: 1px solid white;
  }
`

const GoogleContainer = styled.div`
  margin-left: 8px;
  width: 24px;
  height: 24px;
  display: ${props => props.display};
  justify-content: center;
  align-items: center;
`

export default function Button(props) {
  const { buttonStyle, buttonText } = props
  const { background, fontColor, border, googleDisplay } = setButtonStyle(buttonStyle)

  return (
      <StyledButton background={background} color={fontColor} border={border}>
          {buttonText}
          <GoogleContainer display={googleDisplay}>
            <img src={googleIcon} alt={'Google'} />
          </GoogleContainer>
      </StyledButton>
  )
}