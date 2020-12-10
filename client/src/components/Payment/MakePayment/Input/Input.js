import React from 'react'
import styled from 'styled-components'
import HelperText from './HelperText'
import WarningIcon from './WarningIcon'

const InputContainer = styled.div`
    /* border: 1px solid dodgerblue; */

    & > p {
        margin: 0px 0px 0px 0px;
        font-family: Open Sans;
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 16px;
        display: flex;
        align-items: center;
        letter-spacing: 0.02em;
        color: #545454;
    }
`

const RowWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    /* border: 1px solid black; */
`

const StyledInput = styled.input`
    margin: 4px 0px 4px 0px;
    width: 100%;
    height: 24px;
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 24px;
    display: flex;
    align-items: center;
    letter-spacing: 0.01em;
    color: #545454;
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: 1px solid #545454;
    outline: none;
`




export default function Input(props) {
    const { label } = props
    return (
        <InputContainer>
            <p>{label}</p>
            <RowWrapper>
                <StyledInput />
                <WarningIcon />
            </RowWrapper>
            <HelperText text={'helpertext'} />
        </InputContainer>
    )
}