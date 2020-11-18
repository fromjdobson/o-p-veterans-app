import React, { useContext } from "react";
import styled from "styled-components";
import { AppStateContext } from '../../providers/Store'
import Close from './Close'
import UserIcon from "./UserIcon";
import vetFestLogo from '../../assets/images/vetfest-logo.png'

const HeaderContainer = styled.div`
  box-sizing: border-box;
  height: 88px;
  padding: 32px 12px 16px 12px;
  display: flex;
  justify-content: ${props => props.justifyContent};
  /* justify-content: space-between; */
  border: 1px solid lightcoral;

  @media (min-width: 768px) {
    height: 72px;
    padding: 16px 24px 16px 24px;
  }

  & > img {
    height: 40px;
  }
`

export default function Header() {
  const [appState] = useContext(AppStateContext)
  const { isLoggedIn } = appState
  const { display, centerJustify } = setHeader(isLoggedIn)

  function setHeader(status) {
    if (status === false) {
      return {
        display: `none`,
        centerJustify: `center`
      }
    } else if (status === true) {
      return {
        display: `inline-block`,
        centerJustify: `space-between`
      }
    }
  }

  return (
    <HeaderContainer justifyContent={centerJustify}>
      <Close display={display} />
      <img src={vetFestLogo} alt={'VetFest logo'} />
      <UserIcon display={display} />
    </HeaderContainer>
  );
}