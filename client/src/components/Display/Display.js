import React from 'react'
import styled from 'styled-components'

const DisplayContainer = styled.div`
    width: 327px;
    height: 596px;
    background: #DAD3C1;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.14), 0px 3px 4px rgba(0, 0, 0, 0.12), 0px 1px 5px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
`

export default function Display() {
    return (
        <DisplayContainer>
            <h3>Display Component</h3>
        </DisplayContainer>
    )
}