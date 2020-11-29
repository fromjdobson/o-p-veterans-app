import React from 'react'
import styled from 'styled-components'
import { Login } from './components/UserView/Login'

const AppContainer = styled.div`
    /* border: 1px solid lightcoral; */
`

export default function OpVeteranApp() {


    return (
        <AppContainer>
            <Login />
        </AppContainer>
    )
}