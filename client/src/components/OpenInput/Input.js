import React from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
    background: lightblue;
`

export default function Input(props) {
    const { placeholder } = props
    return (
        <StyledInput placeholder={placeholder} />
    )
}