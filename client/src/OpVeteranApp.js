import React from 'react'
import styled from 'styled-components'
import { UserView } from './components/UserView'

const AppContainer = styled.div`
    /* border: 1px solid lightcoral; */
`

export default function OpVeteranApp() {

    return (
        <AppContainer>
            <UserView />
        </AppContainer>
    )
}