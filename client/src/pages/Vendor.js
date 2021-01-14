import React from 'react'
import styled from 'styled-components'
import { auth } from '../firebase'
import { Header } from '../components/Header'
import { Button } from '../components/Button'

const PageContainer = styled.div`
    height: 100%;
    /* background: lightseagreen; */

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
        color: #303030;
        text-transform: uppercase;
        border: 1px dotted blue;
    }

    & > .signout-button {
        position: relative;
        top: 120px;
        left: calc(50% - 312px/2);
    }
`

export default function Vendor() {
    function handleSignOut() {
        auth.signOut().then(() => {
            console.log(`User has been signed out.`)
        }).catch((error) => {
            console.log(`Error: ${error}`)
        })
    }

    return (
        <PageContainer>
            <Header />
            <Button className={'signout-button'} buttonStyle={'primary'} buttonText={'Sign out'} onClick={() => handleSignOut()} />
        </PageContainer>
    )
}
