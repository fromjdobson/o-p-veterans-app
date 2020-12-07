import React from 'react'
import styled from 'styled-components'
import firebase, { auth, provider } from '../../../firebase'

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
    const db = firebase.firestore()
    const usersRef = db.collection('users')

    function signInWithGoogle() {
        console.log(`signInWithGoogle: fired`)

        auth.signInWithPopup(provider).then((result) => {
            const { uid, displayName, email, photoURL } = result.user
            const loginUserUid = uid


            usersRef.get().then((snapshot) => {
                const { docs } = snapshot

                const userExists = docs.some((user) => {
                    let match
                    let dbUserId = user.data().id
                    
                    if (loginUserUid === dbUserId) {
                        match = true
                    }
                    
                    return match
                })


                if (userExists) {
                    console.log(' it is the truth - not adding to db cause there is already a user there.')
                } else if (!userExists) {
                    console.log('no user exists, so adding another one.')
                    usersRef.doc(uid).set({
                        id: `${uid}`,
                        name: `${displayName}`,
                        email: `${email}`,
                        phone: ``,
                        userPhotoUrl: `${photoURL}`,
                        vendorname: ``,
                        vendordescription: '',
                        streetaddress: '',
                        suitenumber: '',
                        city: '',
                        state: '',
                        zipcode: '',
                        veteranowned: false,
                        nonprofit: false,
                        sponsorship: '',
                        boothreserved: '',
                        formcomplete: false,
                        paymentcomplete: false,
                        isAdmin: false
                    }).then(() => {
                        console.log(`Document successfully written.`)
                    }).catch((error) => {
                        console.error(`Error writing document: ${error}.`)
                    })
                }
            })
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
                    <OpenInput type={'text'} label={'Email'} placeholder={'user@email.com'} />
                    <OpenInput type={'password'} label={'Password'} placeholder={''} />
                </InputContainer>
                <ButtonContainer>
                    <Button buttonStyle={'primary'} buttonText={'SIGN UP'} />
                    <Button buttonStyle={'google'} buttonText={'Register using'} onClick={() => signInWithGoogle()} />
                </ButtonContainer>
                <SignInContainer>
                    <h4>{'Already have an account?'}</h4>
                    <TextButton buttonText={'Sign in'} />
                </SignInContainer>
            </LeftPane>
        </LoginContainer>
    )
}