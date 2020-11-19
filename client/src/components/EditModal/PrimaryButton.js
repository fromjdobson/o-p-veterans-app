import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
    margin: 0px 0px 0px 8px;
    padding: 4px 8px 4px 8px;
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.01em;
    color: #FFFFFF;
    background: #618572;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.14), 0px 3px 4px rgba(0, 0, 0, 0.12), 0px 1px 5px rgba(0, 0, 0, 0.2);
    border: none;
    border-radius: 4px;

    &:hover {
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.14), 0px 4px 5px rgba(0, 0, 0, 0.12), 0px 1px 10px rgba(0, 0, 0, 0.2);
    }
`

export default function PrimaryButton(props) {
    const { buttonText } = props
    
    return (
        <StyledButton>{buttonText}</StyledButton>
    )
}