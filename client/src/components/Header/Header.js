import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { UserContext } from '../../providers/CurrentUser'
import Close from './Close'
import avatar from '../../assets/Icons/avatar-icon.svg'
import UserIcon from "./UserIcon";
import vetFestLogo from '../../assets/images/vetfest-logo.png'

const HeaderContainer = styled.div`
  box-sizing: border-box;
  padding: 24px 16px 16px 16px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 768px) {
    padding: 16px 24px 16px 24px;
  }

  /* & > img {
    height: 40px;
  } */

  & > .user-graphic {
    width: 40px;
    height: 40px;
    border-radius: 100%;
  }



  
`

export default function Header() {
  const [currentUser] = useContext(UserContext)
  
  function setUserGraphic(user) {
    if (user) {
      const { photo } = user
      return photo
    } else {
      return avatar
    }
  }

  let userGrahpic = setUserGraphic(currentUser)

  console.log(userGrahpic)


  return (
    <HeaderContainer>
      <Close />
      <img src={vetFestLogo} alt={'VetFest logo'} />
      {/* <UserIcon /> */}
      <img className={'user-graphic'} src={userGrahpic} alt={'User avatar'} />
    </HeaderContainer>
  );
}