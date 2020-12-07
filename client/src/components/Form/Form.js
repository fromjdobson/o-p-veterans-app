import React, { useContext, useState, useEffect } from 'react'
import styled from 'styled-components'
import { getQuestion } from './utils'
import { RegistrationFormContext } from '../../providers/FormContext'
import { CurrentUserContext } from '../../providers/CurrentUser'
import Counter from './Counter'
import WarningIcon from './WarningIcon'
import Input from './Input'
import HelperText from './HelperText'
import NextButton from './NextButton'

const StyledForm = styled.div`
    margin: 64px 0px 0px 0px;
    width: 100%;
`

const LabelWrapper = styled.div`
    margin: 0px 0px 8px 0px;
    display: flex;
    justify-content: space-between;
    /* border: 2px dashed dodgerblue; */

    & > label {
        margin: 0px;
        width: 80%;
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
    const [questionNumber, setQuestionNumber] = useContext(RegistrationFormContext)
    const [currentUser ,setCurrentUser] = useContext(CurrentUserContext)
    const [currentResponse, setCurrentResponse] = useState(null)
    const { question, inputName } = getQuestion(questionNumber)
    
    return (
        <>
            <StyledForm>
                <LabelWrapper>
                    <label>{question}</label>
                    <Counter totalQuestions={10} currentQuestion={questionNumber} />
                </LabelWrapper>

                <InputWrapper>
                    {/* {createQuestion()} */}
                    <Input placeholder={'placeholder'} />
                    <WarningIcon display={'none'} />
                </InputWrapper>
                <HelperText visibility={'hidden'} />
                <ButtonWrapper>
                    <NextButton />
                </ButtonWrapper>
            </StyledForm>
        </>
    )
}