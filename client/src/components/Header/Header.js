import React from 'react'
import styled from 'styled-components'
import Back from './Back'

const HeaderContainer = styled.div`
  height: 96px;
  background: #F4F4F4;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.14), 0px 4px 5px rgba(0, 0, 0, 0.12), 0px 1px 10px rgba(0, 0, 0, 0.2);
`

export default function Header() {
  return (
    <HeaderContainer>
      <Back />
    </HeaderContainer>
  )
}

