import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
    margin: 0px 8px 0px 0px;
    padding: 4px 16px 4px 16px;
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    letter-spacing: 0.01em;
    text-transform: uppercase;
    color: #93B0A1;
    background: #FFFFFF;
    border: 2px solid #93B0A1;
    box-sizing: border-box;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.14), 0px 3px 4px rgba(0, 0, 0, 0.12), 0px 1px 5px rgba(0, 0, 0, 0.2);
    border-radius: 4px;

    &:hover {
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.14), 0px 4px 5px rgba(0, 0, 0, 0.12), 0px 1px 10px rgba(0, 0, 0, 0.2);
    }
`

export default function SecondaryButton(props) {
    const { buttonText } = props

    return (
        <StyledButton>{buttonText}</StyledButton>
    )
}