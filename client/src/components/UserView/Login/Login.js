import React, { useState } from 'react'
import styled from 'styled-components'

import firebase, { auth, provider } from '../../../firebase'


// import { AppStateContext } from '../../../providers/Store'
import { Header } from '../../Header'
import { OpenInput } from '../../OpenInput'
import { Button } from '../../Button'
import TextButton from './TextButton'

const LoginContainer = styled.div`

`

const LeftPane = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 56px 32px 168px 32px;
`

const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    & > p {
            margin: 0px 0px 8px 0px;
            width: 312px;
            font-family: Open Sans;
            font-style: normal;
            font-weight: 300;
            font-size: 12px;
            line-height: 16px;
            letter-spacing: 0.02em;
            color: #545454;

        }

        & > h3 {
            margin: 0px 0px 64px 0px;
            width: 312px;
            font-family: Helvetica Neue;
            font-style: normal;
            font-weight: bold;
            font-size: 28px;
            line-height: 32px;
            letter-spacing: 0.015em;
            color: #545454;
        }
`

const SignInContainer = styled.div`
    margin: 40px 0px 0px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #FFFFFF;

    & > h4 {
        margin: 0px 0px 0px 8px;
        font-family: Open Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.01em;
        color: #545454;
    }
`

const ButtonContainer = styled.div`
    margin: 56px 0px 0px 0px;
    height: 112px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

const InputContainer = styled.div`
    height: 164px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`


export default function Login() {
    const [email, setEmail] = useState(null)
    const [passsword, setPassword] = useState(null)

    function setEmailInputState(e) {
        const { value } = e.target
        setEmail(value)
    }

    function setPasswordInputState(e) {
        const { value } = e.target
        setPassword(value)
    }

    function login() {
        console.log('login fired')

        auth.signInWithPopup(provider)
            .then((result) => {
                console.log(1111, result.user)
                const { displayName, uid, email } = result.user

                const newUser = {
                    userId: uid,
                    name: displayName,
                    email: email,
                    isAdmin: false
                }
                console.log(2222, newUser)
            })
    }

    


    return (
        <LoginContainer>
            <Header />
            <LeftPane>
                <TitleContainer>
                    <p>{'Register with OP Veteran'}</p>
                    <h3>{'Create an accoount'}</h3>
                </TitleContainer>
                <InputContainer>
                    <OpenInput type={'text'} label={'Email'} placeholder={'user@email.com'} onChange={(e) => setEmailInputState(e)} />
                    <OpenInput type={'password'} label={'Password'} placeholder={''} onChange={(e) => setPasswordInputState(e)} />
                </InputContainer>
                <ButtonContainer>
                    <Button buttonStyle={'primary'} buttonText={'SIGN UP'} />
                    <Button buttonStyle={'google'} buttonText={'Register using'} onClick={() => login()} />
                </ButtonContainer>
                <SignInContainer>
                    <h4>{'Already have an account?'}</h4>
                    <TextButton buttonText={'Sign in'} />
                </SignInContainer>
            </LeftPane>
        </LoginContainer>
    )
}