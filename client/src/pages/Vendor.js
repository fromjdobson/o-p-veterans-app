import React, { useContext } from 'react'
import styled from 'styled-components'
import{ UserContext } from '../providers/CurrentUser'
import { auth } from '../firebase'
import { Button } from '../components/Button'

const PageContainer = styled.div`
    height: 100%;
    background: lightseagreen;

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

    & > .signout-button {
        position: relative;
        top: 120px;
        left: calc(50% - 312px/2);
    }
`

export default function Vendor() {
    const [currentUser] = useContext(UserContext)
    // console.log(currentUser)

    function handleSignOut() {
        auth.signOut().then(() => {
            console.log(`User has been signed out.`)
        }).catch((error) => {
            console.log(`Error: ${error}`)
        })
    }

    return (
        <PageContainer>
            <h2>Vendor Page</h2>
            <Button className={'signout-button'} buttonStyle={'primary'} buttonText={'Sign out'} onClick={() => handleSignOut()} />
        </PageContainer>
    )
}
