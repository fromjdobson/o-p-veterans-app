import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { Switch, Route, useHistory } from 'react-router-dom'
import firebase, { auth } from './firebase'
import { UserContext } from './providers/CurrentUser'
import { findUserAndUpdateState } from './utils'
import { Landing } from './pages/index'
import { Admin } from './pages/index'
import { Vendor } from './pages/index'
// import Playground from './components/UserView/Playground'

const AppContainer = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 100vh;
    /* border: 2px dashed lightblue; */
`
let db = firebase.firestore()
let usersCollection = db.collection('users')

function handleAuthChange(setCurrentUser,history){
    auth.onAuthStateChanged((user) => {
        if (user) {
            findUserAndUpdateState(usersCollection, user, setCurrentUser, history)
        } else {
            history.location.pathname !== '/' && history.push('/')
        }
    })
}
    
export default function App() {
    const [, setCurrentUser] = useContext(UserContext)
    const history = useHistory()

    // handleAuthChange(setCurrentUser,history)

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