import React, { useContext } from 'react'
import styled from 'styled-components'
import { AppStateContext } from './providers/Store'
import { Header } from './components/Header'
import backgroundImage from './assets/images/maysanTopoBackground.png'

const AppContainer = styled.div`
    width: 100%;
    height: 100vh;
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
        </AppContainer>
    )
}