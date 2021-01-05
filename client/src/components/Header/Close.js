import React, { useContext } from "react"
import styled from "styled-components"
import { auth } from '../../firebase'
import { UserContext } from '../../providers/CurrentUser'
import closeIcon from '../../assets/Icons/Vector.svg'

const CloseContainer = styled.div`
  width: 24px;
  height: 24px;
  visibility: ${props => props.visibility};

  & > img {
    width: 100%;
    height: 100%;
  }
`

export default function Close() {
  const [currentUser, setCurrentUser] = useContext(UserContext)

  function setIconDisplay() {
    if (currentUser === 'not logged in') {
      return `hidden`
    } else if (currentUser !== 'not logged in' ) {
      return 'visible'
    }
  }

  let iconDisplay = setIconDisplay()

  function handleClick() {
    auth.signOut().then(() => {
      setCurrentUser(() => {
        return {}
      })
    })
  }

  return (
    <CloseContainer visibility={iconDisplay} onClick={handleClick}>
        <img src={closeIcon} alt={'Click to close.'} />
    </CloseContainer>
  )
}