import React from 'react'
import styled from 'styled-components'
import { FormInput } from './FormInput'

const FormContainer = styled.div`
    /* border: 1px solid purple; */
`

export default function Form() {
    
    return (
        <FormContainer>
            <FormInput />
        </FormContainer>
    )
}