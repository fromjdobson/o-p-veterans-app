import React, { useContext } from "react";
import styled from "styled-components";
import { AppStateContext } from '../../providers/AppState'
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
  const { display } = props
  const [, setAppState] = useContext(AppStateContext)

  function logOut() {
    setAppState({ isLoggedIn: false})
  }

  return (
    <CloseContainer display={display} onClick={logOut}>
        <img src={closeIcon} alt={'Click to close.'} />
    </CloseContainer>
  )
}