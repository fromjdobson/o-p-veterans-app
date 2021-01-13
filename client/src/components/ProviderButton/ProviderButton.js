import React from 'react'
import styled from 'styled-components'
import googleIcon from '../../assets/Icons/google-icon.svg'

const StyledButton = styled.button`
    width: 56px;
    height: 56px;
    background: #FFFFFF;
    border: 2px solid #EAEAEA;
    box-sizing: border-box;
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.14), 0px 1px 18px rgba(0, 0, 0, 0.12), 0px 3px 5px rgba(0, 0, 0, 0.2);
    border-radius: 100px;
    outline: none;

    &:hover {
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.14), 0px 3px 4px rgba(0, 0, 0, 0.12), 0px 1px 5px rgba(0, 0, 0, 0.2);
    }

    &:active {
        border: 2px solid #4285F4;
        box-shadow: none;
    }

    & > img {
        width: 28px;
        height: 28px;
    }
`

export default function ProviderButton(props) {
    const { className, onClick } = props

    return  <StyledButton className={className} onClick={onClick}>
                <img src={googleIcon} alt={'Google icon'} />
            </StyledButton>
}
