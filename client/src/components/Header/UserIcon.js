import React from 'react'
import styled from 'styled-components'

import notLoggedIn from '../../assets/icons/userNotLoggedIn24px.svg'
// import loggedIn from '../../assets/icons/userLoggedIn24px.svg'

const UserIconContainer = styled.div`
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;

    & > img {
        width: 24px;
        height: 24px;
    }
`

export default function UserIcon(props) {

    return (
        <UserIconContainer>
            <img src={notLoggedIn} alt={'User not logged in.'} />
        </UserIconContainer>
    )
}