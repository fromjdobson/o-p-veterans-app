import React from 'react'
import styled from 'styled-components'

const StyledTextButton = styled.button`
    background: lightblue;
`

export default function TextButton() {
    return (
        <StyledTextButton>{'Button'}</StyledTextButton>
    )
}