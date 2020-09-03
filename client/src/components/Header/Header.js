import React from 'react'
import styled from 'styled-components'
import Back from './Back'
import UserIcon from './UserIcon'

import headerLogo from '../../assets/images/op-vet-logo-48px.png'

const HeaderContainer = styled.div`
  padding: 0px 16px 0px 16px;
  width: 100%;
  height: 96px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #DAD3C1;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.14), 0px 4px 5px rgba(0, 0, 0, 0.12), 0px 1px 10px rgba(0, 0, 0, 0.2);`

export default function Header() {
  return (
    <HeaderContainer>
      <Back />
      <img src={headerLogo} alt={'O.P. Veteran'} />
      <UserIcon loggedInStatus={false} />
    </HeaderContainer>
  )
}
