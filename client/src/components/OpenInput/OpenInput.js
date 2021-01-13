import React from 'react'
import styled from 'styled-components'
import WarningIcon from './WarningIcon'
import Input from './Input'
import HelperText from './HelperText'

const OpenInputContainer = styled.div`
    margin: 0px 0px 0px 0px;
    box-sizing: border-box;
    padding: 8px 8px 8px 8px;
    width: 328px;
    display: flex;
    flex-direction: column;
`

const LabelText = styled.p`
    margin: 0px 0px 0px 0px;
    font-family: Open Sans;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
    color: #545454;
`

const Container = styled.div`
    margin: 4px 0px 4px 0px;
    box-sizing: border-box;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > input {
        font-family: Open Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 15px;
        line-height: 24px;
        display: flex;
        align-items: center;
        letter-spacing: 0.01em;
        color: #545454;
    }
`

export default function OpenInput(props) {
    const { label, placeholder, type, onChange, className } = props
    // console.log(onChange)
    
    
    return (
        <OpenInputContainer className={className}>
            <LabelText>{label}</LabelText>
            <Container>
                <Input type={type} placeholder={placeholder} onChange={onChange} />
                <WarningIcon status={'none'} />
            </Container>
            <HelperText displayText={'Helper text'} />
        </OpenInputContainer>
    )
}