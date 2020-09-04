import React from 'react'
import styled from 'styled-components'
import facebookF from '../../assets/images/facebook-login-icon.png'

const FacebookButtonContainer = styled.button`
    margin: 32px 0px 0px 0px;
    padding: 16px 16px 16px 16px;
    box-sizing: border-box;
    width: 100%;
    height: 48px;
    display: flex;
    align-items: center;
    background: #FFFFFF;
    border: 1px solid #1877F2;
    border-radius: 2px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.14), 0px 3px 4px rgba(0, 0, 0, 0.12), 0px 1px 5px rgba(0, 0, 0, 0.2);

`

const IconContainer = styled.div`
    margin-right: 8px 0px 0px;
    box-sizing: border-box;
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: 1px dotted gray; */

    & > img{
        width: 32px;
        height: 32px;
    }
`

const ButtonTextContainer = styled.div`
    width: 100%;
`

const ButtonText = styled.p`
    box-sizing: border-box;
    /* margin: 0px 16px 0px 16px; */
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 18px;
    /* color: #FFFFFF; */
    color: #1877F2;

    /* border: 1px dotted blue; */
`

export default function FacebookButton() {
    return (
        <FacebookButtonContainer>
            <IconContainer>
                <img src={facebookF} alt={'Create an account, or log in using your Facebook account.'} />
            </IconContainer>
            <ButtonTextContainer>
                <ButtonText>{'Sign in with Facebook'}</ButtonText>
            </ButtonTextContainer>
        </FacebookButtonContainer>
    )
}