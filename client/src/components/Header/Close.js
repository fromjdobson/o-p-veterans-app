import React, { useContext } from "react"
import styled from "styled-components"
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
  const [currentUser] = useContext(UserContext)

  function setIconDisplay() {
    if (currentUser === null) {
      return `hidden`
    } else if (currentUser !== null ) {
      return 'visible'
    }
  }

  let iconDisplay = setIconDisplay()

  return (
    <CloseContainer visibility={iconDisplay}>
        <img src={closeIcon} alt={'Click to close.'} />
    </CloseContainer>
  )
}