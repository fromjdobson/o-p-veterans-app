import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
    background: blue;
`

export default function NextButton() {
    let stuff = 'Button'
    return (
        <StyledButton>
            {stuff}
        </StyledButton>
    )
}