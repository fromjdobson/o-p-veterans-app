import React, { useState } from 'react'
import styled from 'styled-components'
import { auth, provider } from '../firebase'
import { ProviderButton } from '../components/ProviderButton'
import { OpenInput } from '../components/OpenInput'
import { Button } from '../components/Button'
import logo from '../assets/images/vetfest-logo.png'

const PageContainer = styled.div`
    height: 100%;
    position: relative;
    background: #FFFFFF;

    & > img {
        width: 160px;
        height: 40px;
        position: relative;
        top: 32px;
        left: calc(50% - 160px/2);
        /* border: 1px dotted blue; */
    }

    & > .title-one {
        margin: 0px;
        width: 328px;
        height: 24px;
        position: relative;
        top: 104px;
        left: calc(50% - 328px/2);
        font-family: Open Sans;
        font-style: normal;
        font-weight: 300;
        font-size: 18px;
        line-height: 24px;
        letter-spacing: 0.02em;
        color: #545454;
        /* border: 1px dotted blue; */
    }

    & > .title-two {
        margin: 0px;
        width: 328px;
        height: 32px;
        position: relative;
        top: 104px;
        left: calc(50% - 328px/2);
        font-family: Open Sans;
        font-style: normal;
        font-weight: bold;
        font-size: 28px;
        line-height: 32px;
        letter-spacing: 0.015em;
        color: #545454;
        /* border: 1px dotted blue; */
    }

    & > .paragraph-one {
        margin: 0px;
        width: 328px;
        position: relative;
        top: 192px;
        left: calc(50% - 328px/2);
        height: 24px;
        font-family: Open Sans;
        font-style: normal;
        font-weight: 300;
        font-size: 18px;
        line-height: 24px;
        text-align: center;
        color: #545454;
        /* border: 1px dotted blue; */
    }

    & > .paragraph-two {
        margin: 0px;
        width: 328px;
        position: relative;
        top: 256px;
        left: calc(50% - 328px/2);
        height: 24px;
        font-family: Open Sans;
        font-style: normal;
        font-weight: 300;
        font-size: 18px;
        line-height: 24px;
        text-align: center;
        color: #545454;
        /* border: 1px dotted blue; */
    }

    & > .email-input {
        position: relative;
        top: 296px;
        left: calc(50% - 328px/2);
    }

    & > .pass-input {
        position: relative;
        top: 324px;
        left: calc(50% - 328px/2);
    }

    & > .google-button {
        position: relative;
        top: 216px;
        left: calc(50% - 56px/2);
    }

    & > .button-container {
        box-sizing: border-box;
        width: 328px;
        height: 40px;
        position: relative;
        top: 364px;
        left: calc(50% - 328px/2);
        display: flex;
        justify-content: space-between;
        align-items: center;
        /* border: 1px dotted orange; */

        & > .short-button {
            width: 148px;
        }
    }
`
const ErrorText = styled.div`
    color: red;
    text-align: center;
`

export default function Landing() {
    const [email, setEmail] = useState(null)
    const [pass, setPass] = useState(null)
    const [error, setError] = useState(null)

    const handleError = error => {
        const { code, message } = error
        console.log(`Error code: ${code} // Error message: ${message}`)
        setError(message)
    }

    const validInput = () => {
        if (!email || !pass) {
            setError('please fill in email and password');
            return false
        }
        return true
    }


    function handleGoolgeLogin() {
        auth.signInWithPopup(provider).then((result) => {
            console.log('User is signed in.')
        }).catch(handleError)
    }

    const handleRegisterButton = () => validInput() &&
        auth.createUserWithEmailAndPassword(email, pass).then((user) => { }).catch(handleError)


    const handleSignInButton = () => validInput() && auth.signInWithEmailAndPassword(email, pass).then((user) => {
        if (user) {
            console.log(user)
        }
    }).catch(handleError)


    function handleEmailInputChange(e) {
        const { value } = e.target
        setEmail(value)
    }

    function handlePassInputChange(e) {
        const { value } = e.target
        setPass(value)
    }

    return (
        <PageContainer>
            <img src={logo} alt={'Vetfest logo'} />
            <p className={'title-one'}>{'OP Veteran'}</p>
            {error && <ErrorText>{error}</ErrorText>}
            <h3 className={'title-two'}>{'VetFest Registration'}</h3>
            <p className={'paragraph-one'}>{'Register and sign in with'}</p>
            <ProviderButton className={'google-button'} onClick={() => handleGoolgeLogin()} />
            <p className={'paragraph-two'}>{'Or'}</p>
            <OpenInput className={'email-input'} type={'email'} label={'Email'} placeholder={''} onChange={(e) => handleEmailInputChange(e)} />
            <OpenInput className={'pass-input'} type={'password'} label={'Password'} placeholder={''} onChange={(e) => handlePassInputChange(e)} />
            <div className={'button-container'}>
                <Button className={'short-button'} buttonStyle={'primary'} buttonText={'Register'} onClick={() => handleRegisterButton()} />
                <Button className={'short-button'} buttonStyle={'secondary'} buttonText={'Sign in'} onClick={() => handleSignInButton()} />
            </div>
        </PageContainer>
    )
}
