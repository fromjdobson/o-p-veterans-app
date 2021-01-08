import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { Switch, Route, useHistory } from 'react-router-dom'
import firebase, { auth } from './firebase'
import { UserContext } from './providers/CurrentUser'
// import Playground from './components/UserView/Playground'
import { Landing } from './pages/index'
import { Admin } from './pages/index'
import { Vendor } from './pages/index'

const AppContainer = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 100vh;
    border: 2px dashed lightblue;
`

export default function OpVeteranApp() {
    const [currentUser, setCurrentUser] = useContext(UserContext)

    let history = useHistory()
    let db = firebase.firestore()

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                const { email, displayName, photoURL } = user
                let signInUserEmail = email
    
                db.collection('users').get().then((snapshot) => {
                    let tempUsersArr = []
    
                    snapshot.forEach((doc) => {
                        tempUsersArr.push({...doc.data()})
                    })
    
                    const found = tempUsersArr.find((element) => {
                        return element.email === signInUserEmail
                     })
    
                     if (found === undefined) {
                        console.log('User does not exist in database - creating new user and pulling from database to select user to add to current user state.')
                        db.collection('users').add({
                            name: displayName,
                            email: signInUserEmail,
                            photo: photoURL,
                            sponsorshipLevel: '',
                            isAdmin: false,
                            isRegistrationComplete: false,
                            boothSelected: ''
                        }).then((docRef) => {
                            console.log(`Document written with ID: ${docRef.id}`)
                        }).catch((error) => {
                            console.log(`Error adding document: ${error}`)
                        })
    
                        db.collection('users').get().then((snapshot) => {
                            let tempUsersArr = []
                            snapshot.forEach((doc) => {
                                tempUsersArr.push({...doc.data()})
                                // console.log(1111, doc.data())
                            })
    
                            const found = tempUsersArr.find((element) => {
                                return element.email === signInUserEmail
                            })
    
                            setCurrentUser(() => {
                                return {...found}
                            })
                        })
                     } else {
                         console.log('User already exists - Just pulling in the existing database of users to choose the current user info from.')
    
                         db.collection('users').get().then((snapshot) => {
                            let tempUsersArr = []

                            snapshot.forEach((doc) => {
                                tempUsersArr.push({...doc.data()})
                                // console.log(1111, doc.data())
                            })
    
                            const found = tempUsersArr.find((element) => {
                                return element.email === signInUserEmail
                            })
    
                            setCurrentUser(() => {
                                return {...found}
                            })
                        })
                     }
                })

                history.push('/vendor')
            } else {

                history.push('/')
            }
        })
    
    }, [])

    return (
        <AppContainer>
            {/* <Playground /> */}
            <Switch>
                <Route exact path='/'>
                    <Landing />
                </Route>
                <Route path='/admin'>
                    <Admin />
                </Route>
                <Route path='/vendor'>
                    <Vendor />
                </Route>
            </Switch>
        </AppContainer>
    )
}