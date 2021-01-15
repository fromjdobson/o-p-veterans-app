import React from 'react'
import WarningIcon from './WarningIcon'
import {MainContainer, SubContainer, Input, Label} from './StyledComponents'
import HelperText from './HelperText'

export default function TextInput({ label, placeholder, type, onChange, className }) {
    return (
        <MainContainer {...{className}}>
            <Label>{label}</Label>
            <SubContainer>
                <Input {...{type,placeholder,onChange}} />
                <WarningIcon status='none' />
            </SubContainer>
            <HelperText displayText='Helper text' />
        </MainContainer>
    )
}