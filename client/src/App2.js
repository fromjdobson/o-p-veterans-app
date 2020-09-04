import React from 'react'
import styled from 'styled-components'
// import { AppStateContext } from './providers/Store'
import { Header } from './components/Header'
// import { Login } from './components/Login'
import { VendorView } from './components/VendorView'
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
    return (
        <AppContainer>
            <Header />
            {/* <Login /> */}
            <VendorView />
        </AppContainer>
    )
}