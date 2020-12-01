import React from "react";
import styled from "styled-components";
import Close from './Close'
import UserIcon from "./UserIcon";
import vetFestLogo from '../../assets/images/vetfest-logo.png'

const HeaderContainer = styled.div`
  border: 1px solid lightcoral;

  /* box-sizing: border-box;
  width: 100%;
  height: 88px;
  padding: 32px 16px 16px 16px;
  display: flex;
  justify-content: ${props => props.justifyContent};
  align-items: center;

  @media (min-width: 768px) {
    height: 72px;
    padding: 16px 40px 16px 40px;
  }

  & > img {
    height: 40px;
  } */
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