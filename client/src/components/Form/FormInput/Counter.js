import React from 'react'
import styled from 'styled-components'

const CoutnerContainer = styled.div`
    background: lightblue;

    & > p {
        margin: 0px;
    }
`

export default function Counter() {
    return (
        <CoutnerContainer>
            <p>{'1/4'}</p>
        </CoutnerContainer>
    )
}