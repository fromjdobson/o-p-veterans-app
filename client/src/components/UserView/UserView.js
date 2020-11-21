import React, { useContext } from 'react'
import styled from 'styled-components'
import { AppStateContext } from '../../providers/AppState'
// import Playground from './Playground'
import { Login } from './Login'
import { AdminView } from './AdminView'
import { VendorView } from './VendorView'

const UserViewContainer = styled.div`
    /* border: 1px solid dodgerblue; */
`

export default function UserView() {
    const [appState] = useContext(AppStateContext)
    const { isLoggedIn, isAdmin } = appState

    function setUserView(loggedInStatus, adminStatus) {
        if (loggedInStatus === false) {
            return <Login />
        } else if (loggedInStatus === true && adminStatus === false) {
            return <VendorView />
        } else if (loggedInStatus === true && adminStatus === true) {
            return <AdminView />
        }
    }

    let userView = setUserView(isLoggedIn, isAdmin)
    
    console.log(1111, userView)


    return (
        <UserViewContainer>
            {/* <Playground /> */}
            {/* <Login /> */}
            {/* <AdminView /> */}
            <VendorView />
            {/* {userView} */}
        </UserViewContainer>
    )
}