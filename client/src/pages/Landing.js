import React from 'react'
import styled from 'styled-components'
import { auth, provider } from '../firebase'
import { Button } from '../components/Button'
import logo from '../assets/images/vetfest-logo.png'

const PageContainer = styled.div`
    height: 100%;
    position: relative;
    background: #FFFFFF;

    & > img {
        width: 160px;
        height: 40px;
        position: absolute;
        top: 32px;
        left: calc(50% - 160px/2);
        /* border: 1px dotted blue; */
    }

    & > p {
        margin: 0px;
        width: 312px;
        position: absolute;
        top: 144px;
        left: calc(50% - 312px/2);
        font-family: Open Sans;
        font-style: normal;
        font-weight: 300;
        font-size: 12px;
        line-height: 16px;
        letter-spacing: 0.02em;
        color: #545454;
        /* border: 1px dotted blue; */
    }

    & > h3 {
        margin: 0px;
        width: 312px;
        position: absolute;
        top: 168px;
        left: calc(50% - 312px/2);
        font-family: Open Sans;
        font-style: normal;
        font-weight: bold;
        font-size: 28px;
        line-height: 32px;
        letter-spacing: 0.015em;
        color: #545454;
        /* border: 1px dotted blue; */
    }

    & > .google-button {
        position: absolute;
        top: 528px;
        left: calc(50% - 312px/2);
    }
`

export default function Landing() {

    function handleGoolgeLogin() {
        auth.signInWithPopup(provider).then((result) => {
            console.log('User is signed in.')
        })
    }

    return (
        <PageContainer>
            <img src={logo} alt={'Vetfest logo'} />
            <p>{'Register with O.P. Veteran'}</p>
            <h3>{'Create an account'}</h3>
            <Button className={'google-button'} buttonStyle={'google'} buttonText={'Login using'} onClick={() => handleGoolgeLogin()}  />
        </PageContainer>
    )
}
