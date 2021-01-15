import React, { useContext, useEffect } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'
import firebase, { auth } from './firebase'
import { UserContext } from './context/AuthProvider'
import { setPage, findUserAndUpdateState } from './utils'
import { Landing } from './pages/index'
import { Admin } from './pages/index'
import { Vendor } from './pages/index'
import { AppContainer } from './AppStyle'


export default function App() {
    // const [, setCurrentUser] = useContext(UserContext)

    // let history = useHistory()
    // let db = firebase.firestore()
    // let usersCollection = db.collection('users')

    // useEffect(() => {
    //     auth.onAuthStateChanged((user) => {
    //         if (user) {
    //             const { email, displayName, photoURL } = user
    //             let signInUserEmail = email

    //             findUserAndUpdateState(usersCollection, signInUserEmail, displayName, photoURL, setCurrentUser, setPage, history)

    //         } else {
    //             history.push('/')
    //         }
    //     })
    
    // }, [db, history])

    return (
        <AppContainer>
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