import React from 'react'
import WarningIcon from './WarningIcon'
import {MainContainer, SubContainer, Input, Label} from './StyledComponents'
import HelperText from './HelperText'

export default function TextInput({ label, placeholder, type, onChange, className }) {
    function handleChange(e) {
        const { value } = e.target
        onChange(value)
    }
    return (
        <MainContainer {...{className}}>
            <Label>{label}</Label>
            <SubContainer>
                <Input {...{type,placeholder}} onChange={handleChange} />
                <WarningIcon status='none' />
            </SubContainer>
            <HelperText displayText='Helper text' />
        </MainContainer>
    )
}