import React from 'react'
import styled from 'styled-components'
import { FormInput } from './FormInput'

const FormContainer = styled.div`
    margin: 64px 0px 0px 0px;
    width: 100%;
`

export default function Form() {
    
    return (
        <FormContainer>
            <FormInput />
        </FormContainer>
    )
}