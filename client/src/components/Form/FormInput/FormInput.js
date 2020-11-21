import React from 'react'
import styled from 'styled-components'
import Counter from './Counter'
import Input from './Input'
import WarningIcon from './WarningIcon'
import HelperText from './HelperText'
import NextButton from './NextButton'


const InputContainer = styled.div`
    border: 1px solid orange;

    & > p {
        margin: 0px;
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

export default function FormInput() {
    return (
        <InputContainer>
            <p>{'Label'}</p>
            <Counter />
            <Input />
            <WarningIcon display={'display'} />
            <HelperText />
            <NextButton />
        </InputContainer>
    )
}