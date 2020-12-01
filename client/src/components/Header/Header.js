import React from "react";
import styled from "styled-components";
import Close from './Close'
import UserIcon from "./UserIcon";
import vetFestLogo from '../../assets/images/vetfest-logo.png'

const HeaderContainer = styled.div`
  box-sizing: border-box;
  padding: 24px 16px 16px 16px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > img {
    height: 40px;
  }

  @media (min-width: 768px) {
    padding: 16px 24px 16px 24px;
  }
`

export default function Header() {

  return (
    <HeaderContainer>
      <Close />
      <img src={vetFestLogo} alt={'VetFest logo'} />
      <UserIcon />
    </HeaderContainer>
  );
}