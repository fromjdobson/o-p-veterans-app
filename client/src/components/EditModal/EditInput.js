import React from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
    width: 56px;
    height: 32px;
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 24px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.01em;
    color: #545454;
    border: 1px solid rgba(84, 84, 84, 0.5);
    box-sizing: border-box;
    border-radius: 2px;
`

export default function EditInput(props) {
    const { placeholder } = props

    return (
        <StyledInput placeholder={placeholder} />
    )
}