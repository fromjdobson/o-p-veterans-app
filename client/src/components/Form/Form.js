import React, { useContext } from 'react'
import styled from 'styled-components'
import { getQuestion } from './utils'
import { RegistrationFormContext } from '../../providers/FormContext'
import Counter from './Counter'

const StyledForm = styled.div`
    margin: 64px 0px 0px 0px;
    width: 100%;
`

const Wrapper = styled.div`
    display: flex;
    border: 2px dashed dodgerblue;

    & > label {
        margin: 0px;
        width: 100%;
        height: 48px;
        font-family: Open Sans;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        display: flex;
        align-items: flex-start;
        color: #545454;
        border: 1px dotted red;
    }
`

export default function Form() {
    const [questionNumber] = useContext(RegistrationFormContext)
    const { question } = getQuestion(questionNumber)

    console.log(question)
    
    return (
        <>
            <StyledForm>
                <Wrapper>
                    <label>{question}</label>
                    <Counter />
                </Wrapper>
            </StyledForm>
        </>
    )
}