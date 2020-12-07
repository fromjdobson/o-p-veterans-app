import React, { useContext } from 'react'
import styled from 'styled-components'
import { getQuestion } from './utils'
import { RegistrationFormContext } from '../../providers/FormContext'
import { FormInput } from './FormInput'

const FormContainer = styled.div`
    margin: 64px 0px 0px 0px;
    width: 100%;
`

export default function Form() {
    const [questionNumber] = useContext(RegistrationFormContext)
    const { question } = getQuestion(questionNumber)
    
    console.log(question)
    
    return (
        <FormContainer>
            <FormInput label={question} />
        </FormContainer>
    )
}