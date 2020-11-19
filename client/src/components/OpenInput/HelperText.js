import React from 'react'
import styled from 'styled-components'

const DisplayText = styled.p`
    margin: 0px 0px 0px 0px;
    color: red;
`

export default function HelperText(props) {
    const { displayText } = props
    return (
        <DisplayText>{displayText}</DisplayText>
    )
}