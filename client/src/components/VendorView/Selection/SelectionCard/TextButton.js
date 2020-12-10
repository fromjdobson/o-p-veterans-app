import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
    padding: 4px 8px;
    /* width: 138px; */
    min-height: 32px;
    position: absolute;
    top: 440px;
    right: 24px;
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
    background: none;
    border: none;
    outline: none;
`

export default function TextButton() {
    return <StyledButton>{'Select this level'}</StyledButton>
}
