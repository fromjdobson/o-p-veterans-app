import React from 'react'
import styled from 'styled-components'
import WarningIcon from './WarningIcon'
import Input from './Input'
import HelperText from './HelperText'

const OpenInputContainer = styled.div`
    box-sizing: border-box;
    padding: 8px 8px 8px 8px;
    width: 312px;
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
`

export default function OpenInput(props) {
    const { label, placeholder } = props
    
    return (
        <OpenInputContainer>
            <LabelText>{label}</LabelText>
            <Container>
                <Input placeholder={placeholder} />
                <WarningIcon status={'none'} />
            </Container>
            <HelperText displayText={'Helper text'} />
        </OpenInputContainer>
    )
}