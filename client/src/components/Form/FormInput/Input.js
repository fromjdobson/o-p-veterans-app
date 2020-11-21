import React from 'react'
import styled from 'styled-components'

const StyledFormInput = styled.input`
    box-sizing: border-box;
    width: 100%;
    font-family: Open Sans;
    font-style: normal;
    font-weight: 300;
    font-size: 28px;
    line-height: 32px;
    display: flex;
    align-items: center;
    color: #403926;
    border-top: none;
    border-right: none;
    border-bottom: 2px solid #EA7C7C;
    border-left: none;
`

export default function Input() {
    return (
        <StyledFormInput />
    )
}