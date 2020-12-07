import React, { useContext } from 'react'
import styled from 'styled-components'
import { getQuestion } from './utils'
import { RegistrationFormContext } from '../../providers/FormContext'
import Counter from './Counter'
import WarningIcon from './WarningIcon'
import Input from './Input'
import HelperText from './HelperText'
import NextButton from './NextButton'
import { Button } from '../Button'

const StyledForm = styled.div`
    margin: 64px 0px 0px 0px;
    width: 100%;
`

const LabelWrapper = styled.div`
    margin: 0px 0px 8px 0px;
    display: flex;
    /* border: 2px dashed dodgerblue; */

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
        /* border: 1px dotted red; */
    }
`

const InputWrapper = styled.div`
    margin: 0px 0px 16px 0px;
    height: 48px;
    display: flex;
    align-items: center;
    /* border: 2px dashed dodgerblue; */

`

const ButtonWrapper = styled.div`
    box-sizing: border-box;
    margin: 0px 0px 16px 0px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    /* border: 1px dashed orange; */
`

export default function Form() {
    const [questionNumber] = useContext(RegistrationFormContext)
    const { question } = getQuestion(questionNumber)

    console.log(question)
    
    return (
        <>
            <StyledForm>
                <LabelWrapper>
                    <label>{question}</label>
                    <Counter />
                </LabelWrapper>

                <InputWrapper>
                    <Input placeholder={'placeholder'} />
                    <WarningIcon display={'block'} />
                </InputWrapper>
                <HelperText visibility={'visible'} />
                <ButtonWrapper>
                    <NextButton />
                </ButtonWrapper>
            </StyledForm>
        </>
    )
}