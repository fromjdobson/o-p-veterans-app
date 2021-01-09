import React from "react";
import styled from "styled-components";
import { auth } from '../../firebase'
import closeIcon from '../../assets/Icons/Vector.svg'

const CloseContainer = styled.div`
  width: 24px;
  height: 24px;
  display: ${props => props.display};

  & > img {
    width: 100%;
    height: 100%;
  }
`

export default function Close(props) {

  function logout() {
    auth.signOut().then(() => {
      console.log(`User has been signed out.`)
    }).catch((error) => {
      console.log(`Error signing user out: ${error}`)
    })
  }

  return (
    <CloseContainer onClick={() => logout()}>
        <img src={closeIcon} alt={'Click to close.'} />
    </CloseContainer>
  )
}