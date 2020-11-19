import React, { useContext } from "react";
import styled from "styled-components";
import { AppStateContext } from '../../providers/Store'
import { setHeader } from './utils'
import Close from './Close'
import UserIcon from "./UserIcon";
import vetFestLogo from '../../assets/images/vetfest-logo.png'

const HeaderContainer = styled.div`
  box-sizing: border-box;
  height: 88px;
  padding: 32px 12px 16px 12px;
  display: flex;
  justify-content: ${props => props.justifyContent};

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

  return (
    <HeaderContainer justifyContent={centerJustify}>
      <Close display={display} />
      <img src={vetFestLogo} alt={'VetFest logo'} />
      <UserIcon display={display} />
    </HeaderContainer>
  );
}