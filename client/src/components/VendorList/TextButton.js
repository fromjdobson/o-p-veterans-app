import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
    margin: 16px 0px 0px 0px;
    width: 200px;
    height: 32px;
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
    const { buttonText, onClick } = props

    return (
        <StyledButton onClick={onClick}>{buttonText}</StyledButton>
    )
}