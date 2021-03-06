import React from 'react'
import styled from 'styled-components'
import WarningIcon from '../../assets/icons/status-warning-icon.svg'
import { setInputStatus } from './utils'

const InputContainer = styled.div`
    margin-top: ${props => props.marginTop};
    box-sizing: border-box;
    /* width: 312px; */
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 8px 8px 8px 8px;
    border-radius: 4px;
    opacity: ${props => props.opacity};
    /* border: 1px solid blue; */
`

const LabelText = styled.p`
    margin: 0px;
    width: 100%;
    font-family: Open Sans;
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 16px;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
    color: #545454;
    /* border: 1px solid lightgreen; */
`

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    border-bottom: ${props => props.borderBottom};
`

const StyledInput = styled.input`
    box-sizing: border-box;
    margin: 4px 0px 4px 0px;
    padding: 0px 0px 0px 0px;
    width: 100%;
    height: 24px;
    outline: none;
    border: none;
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 24px;
    display: flex;
    align-items: center;
    letter-spacing: 0.01em;
    color: ${props => props.color};
    background: none;
`

const HelperText = styled.p`
    margin: 4px 0px 0px 0px;
    width: 100%;
    font-family: Open Sans;
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 16px;
    display: ${props => props.display};
    align-items: center;
    letter-spacing: 0.02em;
    color: #EA7C7C;
    /* border: 1px solid lightgreen; */

`

export default function Input(props) {
    const { status, label, marginTop, onChange, onBlur } = props
    const { helperTextVisibility, warningIconVisibility, border, inputColor, opacity } = setInputStatus(status)
    
    return (
        <InputContainer opacity={opacity} marginTop={marginTop}>
            <LabelText>{label}</LabelText>
            <Wrapper borderBottom={border}>
                <StyledInput color={inputColor} onChange={onChange} onBlur={onBlur} />
                <WarningIcon display={warningIconVisibility} />
            </Wrapper>
            <HelperText display={helperTextVisibility}>Helper Text</HelperText>
        </InputContainer>
    )
}