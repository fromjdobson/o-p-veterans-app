import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import firebase, { auth, provider } from '../../../firebase'
import { CurrentUserContext } from '../../../providers/CurrentUser'
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
    const [currentUser] = useContext(CurrentUserContext)
    const idsToCheck = []

    // const [email, setEmail] = useState(null)
    // const [passsword, setPassword] = useState(null)

    // function setEmailInputState(e) {
    //     const { value } = e.target
    //     setEmail(value)
    // }

    // function setPasswordInputState(e) {
    //     const { value } = e.target
    //     setPassword(value)
    // }


    useEffect(() => {
        // console.log('Use effect fired.')

        auth.onAuthStateChanged((user) => {
            if (user) {
                // console.log(`useEffect fired: User is still logged in.`)
            }
        })

        // const db = firebase.firestore()
        // const usersRef = db.collection('users')

        // usersRef.get().then((snapshot) => {
        //     const tempArr = []
        //     snapshot.forEach((doc) => {
        //         console.log(doc.data())
        //     })
        // })

    }, [])

    function signInWithGoogle() {

        auth.signInWithPopup(provider).then((result) => {
            const signedInUser = result.user
            const { uid, displayName, email, photoURL } = signedInUser
            const signInId = uid

            const db = firebase.firestore()
            const usersRef = db.collection('users')

            usersRef.get().then((snapshot) => {
                snapshot.forEach((doc) => {
                    const { id } = doc.data()
                    const docId = id

                    if (signInId === docId) {
                        console.log('User already in database.')
                    } else {
                        console.log('did not match - add new user obj')

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
                            isAdmind: false
                        }).then(() => {
                            console.log(`Document successfully written.`)
                        }).catch((error) => {
                            console.error(`Error writing document: ${error}.`)
                        })
                    }
                    // console.log(docId, signInId)
                })
            })



            // usersRef.doc(uid).set({
            //     id: `${uid}`,
            //     name: `${displayName}`,
            //     email: `${email}`,
            //     photoURL: `${photoURL}`
            // }).then(() => {
            //     console.log(`Document successfully written.`)
            // }).catch((error) => {
            //     console.error(`Error writing document: ${error}.`)
            // })


            
        })



        // console.log(5555, idsToCheck)
        // idsToCheck.forEach((id) => {
        //     if (id === googleId) {
        //         console.log('match')
        //     } else {
        //         console.log('no match')
        //     }
        // })

        const db = firebase.firestore()
        const usersRef = db.collection('users')

        // usersRef.get().then((snapshot) => {
        //     const tempArr = []
        //     snapshot.forEach((doc) => {
        //         const { addedUser } = doc.data()
        //         const { googleId } = addedUser

        //         idsToCheck.forEach((id) => {
        //             console.log(id)
        //         })

        //         console.log(googleId)

        //         const addedUser = {
        //             name: 'Bobby Bananas',
        //             email: 'bobby@email.com',
        //             vendorname: 'Bananas or Bananas',
        //             photoURL: 'www.blaah.com/images',
        //             googleId: '37jfkspasd9o23',
        //             isAdmin: false
        //         }

        //         usersRef.add({ addedUser })
        //     })
        // })

    }

    function logoout() {
        console.log('logout clicked')
        auth.signOut().then(() => {
            console.log('User has been signed out, duuuuuuuuude.')
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
                <button onClick={() => logoout()}>{'Button'}</button>
            </LeftPane>
        </LoginContainer>
    )
}