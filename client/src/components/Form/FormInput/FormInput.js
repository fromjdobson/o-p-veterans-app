import React from 'react'
import styled from 'styled-components'
import WarningIcon from './WarningIcon'

const InputContainer = styled.div`
    border: 1px solid orange;
`

export default function FormInput() {
    return (
        <InputContainer>
            <WarningIcon />
        </InputContainer>
    )
}