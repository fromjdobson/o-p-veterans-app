import React from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
    box-sizing: border-box;
    width: 100%;
    height: 24px;
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 24px;
    letter-spacing: 0.01em;
    border-top: none;
    border-right: none;
    border-bottom: 1px solid #545454;
    border-left: none;
    background: #FFFFFF;
    opacity: 0.4;

    &:focus {
        font-family: Open Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 15px;
        line-height: 24px;
        letter-spacing: 0.01em;
        opacity: 1.0;
        outline: none;
    }
`

export default function Input(props) {
    const { placeholder, type } = props
    return (
        <StyledInput type={type} placeholder={placeholder} />
    )
}