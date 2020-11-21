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

export default function FormInput() {
    return (
        <InputContainer>
            <LabelWrapper>
                <p>{'Label'}</p>
                <Counter />
            </LabelWrapper>
            <Input placeholder={'placeholder'} />
            <WarningIcon display={'display'} />
            <HelperText />
            <NextButton />
        </InputContainer>
    )
}