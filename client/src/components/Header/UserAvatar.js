import React from 'react'
import styled from 'styled-components'
import userDefault40px from '../../images/user-default-40px.svg'
import userLoggedIn40px from '../../images/user-loggedIn-40px.svg'


const UserAvatarContainer = styled.div`
    width: 40px;
    height: 40px;
    /* border: 1px solid red; */

    @media (min-width: 768px) {
        width: 48px;
        height: 48px;
    }

    & > img {
        width: 40px;
        height: 40px;

        @media (min-width: 768px) {
            min-width: 48px;
            min-height: 48px;
        }
    }
`

function getAvatar(status, img1, img2) {
    if (status === false) {
        return <img src={img1} alt={'User not logged in.'} />
    } else if (status === true) {
        return <img src={img2} alt={'User is logged in.'} />
    }
}

export default function UserAvatar(props) {
    const avatarStatus = props.isLoggedIn
    let avatar = getAvatar(avatarStatus, userDefault40px, userLoggedIn40px)
    
    return (
        <UserAvatarContainer>
            {avatar}
        </UserAvatarContainer>
    )
}