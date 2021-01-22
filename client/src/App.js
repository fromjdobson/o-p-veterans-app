import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Switch, Route, useHistory } from 'react-router-dom'
import firebase, { auth } from './firebase'
import { setPage, findUserAndUpdateState } from './utils'
import { Landing } from './pages/index'
import { Admin } from './pages/index'
import { Vendor } from './pages/index'
import avatar from './assets/icons/avatar-icon.svg'

const AppContainer = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 100vh;
    /* border: 2px dashed lightblue; */
`

export default function App() {
    const [currentUser, setCurrentUser] = useState({ usrImg: avatar })

    let history = useHistory()
    let db = firebase.firestore()
    let usersCollection = db.collection('users')

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                const { email, displayName, photoURL } = user
                let signInUserEmail = email

                findUserAndUpdateState(usersCollection, signInUserEmail, displayName, photoURL, setCurrentUser, setPage, history)

            } else {
                history.push('/')
            }
        })

    }, [db, history])

    return (
        <AppContainer>
            <Switch>
                <Route exact path='/'>
                    <Landing />
                </Route>
                <Route path='/admin'>
                    <Admin {...{ currentUser }} />
                </Route>
                <Route path='/vendor'>
                    <Vendor {...{ currentUser }} />
                </Route>
            </Switch>
        </AppContainer>
    )
}