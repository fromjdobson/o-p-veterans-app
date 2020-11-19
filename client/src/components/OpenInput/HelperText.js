import React from 'react'
import styled from 'styled-components'

const DisplayText = styled.p`
    margin: 0px 0px 0px 0px;
    font-family: Open Sans;
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 16px;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
    color: #EA7C7C;
    /* border: 1px solid mediumspringgreen; */
`

export default function HelperText(props) {
    const { displayText } = props
    return (
        <DisplayText>{displayText}</DisplayText>
    )
}