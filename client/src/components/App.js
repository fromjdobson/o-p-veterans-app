import React from 'react'
import styled from 'styled-components'
import { Header } from '../components/Header'
import { Main } from './Main'

import background from '../images/backgroundImage.png'

const AppContainer = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 100vh;
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), url(${background});
    background-blend-mode: normal, color, normal;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    /* border: 1px solid lightcoral */
`

export default function App() {
    return (
        <AppContainer>
            <Header isLoggedIn={false} />
            <Main />
        </AppContainer>
    )
}