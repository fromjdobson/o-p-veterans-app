import React, { useContext } from 'react'
import styled from 'styled-components'
import firebase, { auth, provider } from '../../firebase'
import { UserContext } from '../../providers/CurrentUser'
import { Header } from '../../components/Header'
import { OpenInput } from '../../components/OpenInput'
import { Button } from '../../components/Button'

const PageContainer = styled.div`
    position: relative;
    border: 2px dashed lightcoral;

    & > .left-pane {
        /* border: 1px dashed dodgerblue; */

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
            letter-spacing: 0.5px;
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
            letter-spacing: 0px;
            color: #545454;
            /* border: 1px dotted blue; */
        }

        & > .email-input {
            position: absolute;
            top: 264px;
            left: calc(50% - 312px/2);
        }

        & > .password-input {
            position: absolute;
            top: 344px;
            left: calc(50% - 312px/2);
        }

        & > .input-field-button {
            position: absolute;
            top: 460px;
            left: calc(50% - 312px/2);
        }

        & > .google-button {
            position: absolute;
            top: 532px;
            left: calc(50% - 312px/2);
        }
    }

    & > .right-pane {
        display: none;
        border: 1px dashed dodgerblue;
    }
`

export default function Landing() {
    const [currentUser, setCurrentUser] = useContext(UserContext)

    function signInWithGoogle() {
        auth.signInWithPopup(provider).then((result) => {
            const signedInUser = {...result.user}
            const { email } = signedInUser
            let signedInUserEmail = email
            // console.log(email)

            const db = firebase.firestore()
            const usersRef = db.collection('users')
            usersRef.get().then((snapshot) => {
                snapshot.forEach((doc) => {
                    const { email } = doc.data()
                    let dbUserEmail = email

                    if (signedInUserEmail === dbUserEmail) {
                        // console.log(doc.data())
                        // console.log(currentUser)

                        setCurrentUser(() => {
                            return {...doc.data()}
                        })
                    }

                    // console.log(dbUserEmail)
                })
            })
        })
    }

    // console.log(currentUser)

    return (
        <PageContainer>
            <Header />
            <div className={'left-pane'}>
                <p>{'Register with OP Veteran'}</p>
                <h3>{'Create an account'}</h3>
                <OpenInput className={'email-input'} label={'Email'} placeholder={'email'} type={'email'} />
                <OpenInput className={'password-input'} label={'Password'} placeholder={'password'} type={'password'} />
                <Button className={'input-field-button'} buttonStyle={'primary'} buttonText={'Submit'} />
                <Button className={'google-button'} buttonStyle={'google'} buttonText={'Register using'} onClick={() => signInWithGoogle()} />
            </div>
            <div className={'right-pane'}>
                <p>Right Pane</p>
            </div>
        </PageContainer>
    )
}
