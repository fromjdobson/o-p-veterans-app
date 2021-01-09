import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { Switch, Route, useHistory } from 'react-router-dom'
import firebase, { auth } from './firebase'
import { UserContext } from './providers/CurrentUser'
import { setTempUsersArr, findUserEmail, createNewUserObj, setPage } from './utils'
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
    const [, setCurrentUser] = useContext(UserContext)

    let history = useHistory()
    let db = firebase.firestore()

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                const { email, displayName, photoURL } = user
                let signInUserEmail = email
    
                db.collection('users').get().then((snapshot) => {
                    let tempUsersArr = []

                    setTempUsersArr(snapshot, tempUsersArr)

                    let found = findUserEmail(tempUsersArr, signInUserEmail)
    
                    if (found === undefined) {
                        let newUserObj = createNewUserObj(displayName, signInUserEmail, photoURL)

                        db.collection('users').add({...newUserObj}).then((docRef) => console.log(`Document written with ID: ${docRef.id}`)).catch((error) => console.log(`Error writing document: ${error}`))

                        db.collection('users').get().then((snapshot) => {
                            let tempUsersArr = []
                            setTempUsersArr(snapshot, tempUsersArr)

                            let found = findUserEmail(tempUsersArr, signInUserEmail)
                            const { isAdmin } = found

                            setCurrentUser(() => {
                                return {...found}
                            })

                            setPage(isAdmin, history)
                        })
                    } else {
                        db.collection('users').get().then((snapshot) => {
                            let tempUsersArr = []
                            setTempUsersArr(snapshot, tempUsersArr)

                            let found = findUserEmail(tempUsersArr, signInUserEmail)
                            const { isAdmin } = found

                            setCurrentUser(() => {
                                return {...found}
                            })

                            setPage(isAdmin, history)
                        })
                     }
                })
            } else {
                history.push('/')
            }
        })
    
    }, [setCurrentUser, db, history])

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