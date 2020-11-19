import React from 'react'
import styled from 'styled-components'

const StyledTextButton = styled.button`
    height: 32px;
    padding: 4px 8px 4px 8px;
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.01em;
    color: #799C8A;
    background: #FFFFFF;
    border: none;
`

export default function TextButton(props) {
    const { buttonText } = props

    return (
        <StyledTextButton>{buttonText}</StyledTextButton>
    )
}