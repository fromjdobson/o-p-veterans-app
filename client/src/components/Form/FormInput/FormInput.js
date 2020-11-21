import React from 'react'
import styled from 'styled-components'
import Counter from './Counter'
import Input from './Input'
import WarningIcon from './WarningIcon'
import HelperText from './HelperText'
import NextButton from './NextButton'


const InputContainer = styled.div`
    border: 1px solid orange;
`

const LabelWrapper = styled.div`
    display: flex;
    border: 2px dashed green;

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
        /* background: orange; */
    }
`

const InputWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    background: lightgoldenrodyellow;
`

const NextButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    border: 2px dotted green;
`

export default function FormInput() {
    return (
        <InputContainer>
            <LabelWrapper>
                <p>{'Label'}</p>
                <Counter />
            </LabelWrapper>
            <InputWrapper>
                <Input placeholder={'placeholder'} />
                <WarningIcon display={'flex'} />
            </InputWrapper>
            <HelperText />
            <NextButtonWrapper>
                 <NextButton />
            </NextButtonWrapper>
        </InputContainer>
    )
}