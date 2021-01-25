import React from "react";
import { Link } from 'react-router-dom'
import styled from "styled-components";
import closeIcon from '../../assets/icons/Vector.svg'
import vetFestLogo from '../../assets/images/vetfest-logo.png'
import avatar from '../../assets/icons/avatar-icon.svg'


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
  & > a{
    box-shadow: none;
  }
`

export default function Header({ currentUser }) {
  const img = currentUser.userImg || avatar
  const alt = currentUser.name || 'user has no name'

  return (
    <HeaderContainer>
      <Link to='/logout'>
        <img className='close-icon' src={closeIcon} alt='Click to signout' />
      </Link>
      <img src={vetFestLogo} alt={'VetFest logo'} />
      <img className='user-graphic' src={img} alt={alt} />
    </HeaderContainer>
  );
}