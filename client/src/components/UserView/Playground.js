import React from 'react'
import styled from 'styled-components'

const PlaygroundContainer = styled.div`
    border: 2px solid green;

    & > h1 {
        margin: 0px;
    }
`

export default function Playground() {
    return (
        <PlaygroundContainer>
            <h1>Playground Component</h1>
        </PlaygroundContainer>
    )
}