import React, { useContext } from 'react'
import styled from 'styled-components'
import { AppStateContext } from './providers/Store'
import { Header } from './components/Header'
import { Login } from './components/Login'
import { VendorView } from './components/VendorView'
import { AdminView } from './components/AdminView'
import backgroundImage from './assets/images/maysanTopoBackground.png'

const AppContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    background: url(${backgroundImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`

export default function App() {
    const [appState] = useContext(AppStateContext)
    const { userLoggedIn, currentUser } = appState
    const { isAdmin } = currentUser

    function setView(loggedIn, userAdmin) {
        if (loggedIn === false && userAdmin === false) {
            return <Login />
        } else if (loggedIn === true && userAdmin === false) {
            return <VendorView />
        } else if (loggedIn === true && userAdmin === true) {
            return <AdminView />
        }
    }
    
    let userView = setView(userLoggedIn, isAdmin)

    return (
        <AppContainer>
            <Header />
            {userView}
        </AppContainer>
    )
}