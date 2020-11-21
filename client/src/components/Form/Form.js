import React from 'react'
import styled from 'styled-components'
import { ProgressBar } from './ProgressBar'
import { FormInput } from './FormInput'

const FormContainer = styled.div`
    /* border: 1px solid purple; */
`

export default function Form() {
    
    return (
        <FormContainer>
            <ProgressBar />
            <FormInput />
        </FormContainer>
    )
}