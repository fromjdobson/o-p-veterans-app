import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
    width: 50%;
    height: 48px;
    font-family: Open Sans;
    font-style: normal;
    font-size: 15px;
    line-height: 24px;
    letter-spacing: 0.02em;
    border: 1px solid black;
    outline: none;
`

export default function ToggleButton(props) {
    const { buttonText, onClick, name } = props

    return <StyledButton name={name} onClick={onClick}>{buttonText}</StyledButton>
}
