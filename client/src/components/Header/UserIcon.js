import React, { useContext } from 'react'
import styled from 'styled-components'
import { UserContext } from '../../providers/CurrentUser'
import avatar from '../../assets/Icons/avatar-icon.svg'

const IconContainer = styled.div`
    width: 40px;
    height: 40px;
    visibility: ${props => props.visibility};

    & > img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
`

export default function UserIcon() {
    const [currentUser] = useContext(UserContext)
    console.log(currentUser)

    function setIconDisplay() {
        if (currentUser === null) {
          return `hidden`
        } else if (currentUser !== null ) {
          return 'visible'
        }
      }

      let iconDisplay = setIconDisplay()

    return (
        <IconContainer visibility={iconDisplay}>
            <img src={avatar} alt={'User is logged in.'} />
        </IconContainer>
    )
}