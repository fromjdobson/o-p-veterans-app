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
    color: ${props => props.color};
    background: ${props => props.background};
    border: 1px solid red;
    outline: none;
`

export default function ToggleButton(props) {
    const { buttonText, toggleClick } = props

    return <StyledButton onClick={toggleClick}>{buttonText}</StyledButton>
}
