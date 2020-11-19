import React from 'react'
import styled from 'styled-components'
import WarningIcon from './WarningIcon'
import Input from './Input'
import HelperText from './HelperText'

const OpenInputContainer = styled.div`
    border: 1px solid lightcoral;
`

const LabelText = styled.p`
    margin: 0px 0px 0px 0px;
    font-family: Open Sans;
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 16px;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
    color: #545454;
`

export default function OpenInput(props) {
    const { label, placeholder } = props
    return (
        <OpenInputContainer>
            <LabelText>{label}</LabelText>
            <Input placeholder={placeholder} />
            <WarningIcon status={'none'} />
            <HelperText displayText={'Helper text'} />
        </OpenInputContainer>
    )
}