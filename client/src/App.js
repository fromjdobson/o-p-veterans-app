import React from 'react'
import styled from 'styled-components'
import Playground from './components/UserView/Playground'

const AppContainer = styled.div`
    /* border: 1px solid lightcoral; */
`

export default function OpVeteranApp() {

    return (
        <AppContainer>
            <Playground />
        </AppContainer>
    )
}