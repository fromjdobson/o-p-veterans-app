import React, { useContext } from 'react'
import styled from 'styled-components'
import { CurrentUserContext } from '../../providers/CurrentUser'
import avatar from '../../assets/Icons/avatar-icon.svg'

const IconContainer = styled.div`
    width: 40px;
    height: 40px;
    display: ${props => props.display};

    & > img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
`

export default function UserIcon(props) {
    const [currentUser] = useContext(CurrentUserContext)
    const newObj = {...currentUser}
    const { userPhotoUrl } = newObj
    const { display } = props

    return (
        <IconContainer display={display}>
            <img src={userPhotoUrl ? userPhotoUrl : avatar} alt={'User is logged in.'} />
        </IconContainer>
    )
}