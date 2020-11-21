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
    color: #403926;
    border-top: none;
    border-right: none;
    border-bottom: 2px solid #545454;
    border-left: none;
    outline: none;
`

export default function Input() {

    return (
        <StyledFormInput />
    )
}