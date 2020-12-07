import React from 'react'
import styled from 'styled-components'
import Counter from './Counter'
import Input from './Input'
import WarningIcon from './WarningIcon'
import HelperText from './HelperText'
import NextButton from './NextButton'

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const LabelWrapper = styled.div`
    box-sizing: border-box;
    margin: 0px 0px 8px 0px;
    width: 100%;
    display: flex;

    & > p {
        margin: 0px;
        width: 100%;
        font-family: Open Sans;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        display: flex;
        align-items: center;
        color: #545454;
    }
`

const InputWrapper = styled.div`
    box-sizing: border-box;
    margin: 0px 0px 16px 0px;
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
`

const NextButtonWrapper = styled.div`
    box-sizing: border-box;
    margin: 8px 0px 0px 0px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
`

export default function FormInput(props) {
    const { label } = props

    return (
        <InputContainer>
            <LabelWrapper>
                <p>{label}</p>
                <Counter />
            </LabelWrapper>
            <InputWrapper>
                <Input placeholder={'placeholder'} />
                <WarningIcon display={'none'} />
            </InputWrapper>
            <HelperText visibility={'hidden'} />
            <NextButtonWrapper>
                 <NextButton />
            </NextButtonWrapper>
        </InputContainer>
    )
}