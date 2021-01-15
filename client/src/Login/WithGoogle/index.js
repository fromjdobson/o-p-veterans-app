import React from 'react'
import googleIcon from '../../assets/Icons/google-icon.svg'
import { StyledButton } from './StyledButton'
import { handleGoolgeLogin } from './functions'

export default function GoogleButton(props) {
    return <StyledButton {...props}>
        <img src={googleIcon} alt={'Google icon'} onClick={ handleGoolgeLogin } />
    </StyledButton>
}