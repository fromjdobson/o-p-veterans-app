import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { Switch, Route, useHistory } from 'react-router-dom'
import firebase, { auth } from './firebase'
import { UserContext } from './providers/CurrentUser'
import { setTempUsersArr, findUserEmail, createNewUserObj, setPage, addUserToFireStore, getUsersCollection } from './utils'
import { Landing } from './pages/index'
import { Admin } from './pages/index'
import { Vendor } from './pages/index'
// import Playground from './components/UserView/Playground'

const AppContainer = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 100vh;
    border: 2px dashed lightblue;
`

export default function OpVeteranApp() {
    const [, setCurrentUser] = useContext(UserContext)

    let history = useHistory()
    let db = firebase.firestore()
    let usersCollection = db.collection('users')

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                const { email, displayName, photoURL } = user
                let signInUserEmail = email
    
                usersCollection.get().then((snapshot) => {
                    let tempArr = setTempUsersArr(snapshot)

                    let found = findUserEmail(tempArr, signInUserEmail)
    
                    if (found === undefined) {
                        let newUserObj = createNewUserObj(displayName, signInUserEmail, photoURL)

                        addUserToFireStore(usersCollection, newUserObj)

                        getUsersCollection(usersCollection, signInUserEmail, setCurrentUser, setPage, history)

                    } else {

                        getUsersCollection(usersCollection, signInUserEmail, setCurrentUser, setPage, history)
                     }
                })
            } else {
                history.push('/')
            }
        })
    
    }, [setCurrentUser, usersCollection, db, history])

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