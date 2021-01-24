import React from "react";
import { useHistory } from 'react-router'
import styled from "styled-components";
import { auth } from '../../firebase'
import closeIcon from '../../assets/icons/Vector.svg'
import vetFestLogo from '../../assets/images/vetfest-logo.png'
import handleErrors from '../../reusables/defaultErrorHandler'

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

export default function Header({currentUser}) {
  const history = useHistory()

  function logout() {
    auth.signOut().then(() => {
      history.push('/')      
    }).catch(handleErrors)
  }

  return (
    <HeaderContainer>
      <img className={'close-icon'} src={closeIcon} alt={'Click to signout'} onClick={logout} />
      <img src={vetFestLogo} alt={'VetFest logo'} />
      <img className={'user-graphic'} src={currentUser.userImg} alt={currentUser.name} />
    </HeaderContainer>
  );
}