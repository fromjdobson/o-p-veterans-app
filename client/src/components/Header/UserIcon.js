import React, { useContext } from 'react'
import styled from 'styled-components'
import { AppStateContext } from '../../providers/Store'
import notLoggedIn from '../../assets/icons/userNotLoggedIn24px.svg'
import loggedIn from '../../assets/icons/userLoggedIn24px.svg'

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

export default function UserIcon() {
    const [appState] = useContext(AppStateContext)
    const { userLoggedIn } = appState

    function setIcon(loggedInStatus) {
        if (loggedInStatus === false) {
            return <img src={notLoggedIn} alt={'User not logged in.'} />
        } else if (loggedInStatus === true) {
            return <img src={loggedIn} alt={'User is logged in.'} />
        }
    }

    let icon = setIcon(userLoggedIn)
    // console.log(icon)


    return (
        <UserIconContainer>
            {icon}
            {/* <img src={notLoggedIn} alt={'User not logged in.'} /> */}
        </UserIconContainer>
    )
}