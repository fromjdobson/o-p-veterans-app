import React, { useContext } from "react";
import styled from "styled-components";
import { auth } from '../../firebase'
import { UserContext } from '../../providers/CurrentUser'
import { setUserGraphic } from './utils'
import avatar from '../../assets/icons/avatar-icon.svg'
import closeIcon from '../../assets/icons/Vector.svg'
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

  & > .close-icon {
    width: 24px;
    height: 24px;
  }

  & > .user-graphic {
    width: 40px;
    height: 40px;
    border-radius: 100%;
  }
`

export default function Header() {
  const [currentUser] = useContext(UserContext)
  let userGrahpic = setUserGraphic(currentUser, avatar)

  function logout() {
    auth.signOut().then(() => {
      console.log(`User has been signed out.`)
    }).catch((error) => {
      console.log(`Error signing user out: ${error}`)
    })
  }

  return (
    <HeaderContainer>
      <img className={'close-icon'} src={closeIcon} alt={'Click to signout'} onClick={() => logout()} />
      <img src={vetFestLogo} alt={'VetFest logo'} />
      <img className={'user-graphic'} src={userGrahpic} alt={'User avatar'} />
    </HeaderContainer>
  );
}