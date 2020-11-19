import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import { AppStateContext } from '../../../providers/Store'
import { Header } from '../../Header'
import { OpenInput } from '../../OpenInput'
import { Button } from '../../Button'

const LoginContainer = styled.div`
    /* width: 100%; */
    display: flex;
    flex-direction: column;
    /* border: 1px solid purple; */
`

const LeftPane = styled.div`
    /* max-width: 375px; */
    height: 100%;
    padding: 56px 32px 168px 32px;
    border: 1px solid black;

    & > p {
        margin: 0px 0px 8px 0px;
        font-family: Open Sans;
        font-style: normal;
        font-weight: 300;
        font-size: 12px;
        line-height: 16px;
        letter-spacing: 0.02em;
        color: #545454;
        border: 1px solid mediumspringgreen;
    }

    & > h3 {
        margin: 0px 0px 64px 0px;
        font-family: Helvetica Neue;
        font-style: normal;
        font-weight: bold;
        font-size: 28px;
        line-height: 32px;
        letter-spacing: 0.015em;
        color: #545454;
        border: 1px solid mediumspringgreen;
    }

    & > h4 {
        margin: 0px;
        font-family: Open Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.01em;
        color: #545454;
        border: 1px solid mediumspringgreen;
    }
`

export default function Login() {
    const [appState,setAppState] = useContext(AppStateContext)
    // const [loginState, setLoginState] = useState({ email: '', password: ''})
    // const { email, password } = loginState
    console.log(appState)

    // function getEmail(e) {
    //     const { value } = e.target
    //     setLoginState({ email: value, password: password })
    // }

    // function getPassword(e) {
    //     const { value } = e.target
    //     setLoginState({ email: email, password: value })
    // }


    return (
        <LoginContainer>
            <Header />
            <LeftPane>
                <p>{'Register with OP Veteran'}</p>
                <h3>{'Create an accoount'}</h3>
                <OpenInput type={'text'} label={'Email'} placeholder={'user@email.com'} />
                <OpenInput type={'password'} label={'Password'} placeholder={''} />
                <Button buttonStyle={'primary'} buttonText={'SIGN UP'} />
                <Button buttonStyle={'google'} buttonText={'Register using'} />
                <h4>{'Already have an account?'}</h4>
            </LeftPane>
        </LoginContainer>
    )
}