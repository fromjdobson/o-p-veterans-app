import React from 'react'
import styled from 'styled-components'
import firebase, { auth, provider } from '../firebase'
import { Button } from '../components/Button'

const PageContainer = styled.div`
    height: 100%;
    background: lightcoral;

    & > h2 {
        margin: 0px;
        width: 400px;
        height: 48px;
        position: relative;
        top: 80px;
        left: calc(50% - 400px/2);
        font-size: 48px;
        font-family: Open Sans;
        line-height: 48px;
        text-align: center;
        color: #FFFFFF;
        text-transform: uppercase;
        /* border: 1px dotted blue; */
    }

    & > .login-button {
        position: relative;
        top: 120px;
        left: calc(50% - 312px/2);
    }
`

export default function Landing() {

    function handleLogin() {
        auth.signInWithPopup(provider).then((result) => {
            console.log(1111, result.user)
        })
    }

    return (
        <PageContainer>
            <h2>Landing Page</h2>
            <Button className={'login-button'} buttonStyle={'primary'} buttonText={'Login'} onClick={() => handleLogin()}  />
        </PageContainer>
    )
}
