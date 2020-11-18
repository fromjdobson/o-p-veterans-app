import React from 'react'
import styled from 'styled-components'

const InputContainer = styled.div`
    margin: 0px 24px 0px 0px;
    display: flex;
    flex-direction: column;
`

const StyledLabel = styled.label`
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
`

const StyledInput = styled.input`
    margin: 8px 0px 0px 0px;
    width: 136px;
    height: 24px;
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: 1px solid #545454;
`

export default function Input(props) {
    const { label } = props
    
    return (
        <InputContainer>
            <StyledLabel>{label}</StyledLabel>
            <StyledInput />
        </InputContainer>
    )
}