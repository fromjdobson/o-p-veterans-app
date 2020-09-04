import React from 'react'
import styled from 'styled-components'
import { Input } from '../Input'
import { GoogleButton } from '../GoogleButton'
import { FacebookButton } from '../FacebookButton'

const LoginContainer = styled.div`
    margin-top: 60px;
    box-sizing: border-box;
    width: 328px;
    /* height: 600px; */
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 24px 48px 24px;
    background: #DAD3C1;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.14), 0px 3px 4px rgba(0, 0, 0, 0.12), 0px 1px 5px rgba(0, 0, 0, 0.2);
    border-radius: 8px;

    @media (min-width: 768px) {
        width: 624px;
        height: 720px;
        padding: 48px 80px 48px 80px;
    }
`

const Heading = styled.h3`
    margin: 0px 0px 0px 0px;
    width: 100%;
    height: 64px;
    font-family: Helvetica Neue;
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    line-height: 32px;
    letter-spacing: 0.015em;
    color: #403926;
    overflow: hidden;
    /* border: 1px dotted gray; */
`

const SubHeading = styled.h6`
    margin: 0px 0px 16px 0px;
    width: 100%;
    height: 72px;
    font-family: Helvetica Neue;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.015em;
    color: #403926;
    overflow: hidden;
    /* border: 1px dotted gray; */
`

const TermsContainer = styled.div`
    margin: 8px 0px 0px 0px;
    padding: 8px 16px 8px 16px;
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #DAD3C1;
    /* border: 0.5px solid #545454; */
    box-sizing: border-box;
    border-radius: 4px;
`

const TermsText = styled.p`
    margin: 0px 0px 0px 0px;
    font-family: Open Sans;
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.02em;
    color: #545454;
`

export default function Login() {
    return (
        <LoginContainer>
            <Heading>{'Welome.'}</Heading>
            <SubHeading>{'Please sign in, or register an account with O.P. Veteran to start vendor registration.'}</SubHeading>
            <Input label={'Email'} warningStatus={false} warningMessage={''} />
            <Input label={'Password'} warningStatus={false} warningMessage={''} />
            <TermsContainer>
                <TermsText>{'By creating and account, you accept our Terms and Conditions.'}</TermsText>
            </TermsContainer>
            <GoogleButton />
            <FacebookButton />
        </LoginContainer>
    )
}