import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Switch, Route, useHistory } from 'react-router-dom'
import { auth } from './firebase'
import { Landing } from './pages/index'
import { Admin } from './pages/index'
import { Vendor } from './pages/index'
import { Header } from './components/Header'
import { findUserByEmail, addUser } from './reusables/firestoreCRUD'
import userModel from './userModel'


const AppContainer = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 100vh;
`

export default function App() {
    const [currentUser, setCurrentUser] = useState({})
    const history = useHistory()

    useEffect(() => {
        !currentUser.email && auth.onAuthStateChanged((user) => {
            console.log('Auth changed', user)
            if (user) {
                findUserByEmail(user.email).then((data) => {
                    let opvetUser = userModel(user)
                    if (data.length === 0) {
                        addUser(opvetUser)
                    }
                    else {
                        opvetUser = data[0]
                    }
                    setCurrentUser(opvetUser)
                })
            } else if (user === null) {
                setCurrentUser({})
            }
        })
    }, [])

    if(currentUser.isRegistrationComplete===false){
        history.push('/register/1')
    } else if (currentUser.isRegistrationComplete===true){
        history.push('./selectbooth')
    }

    console.log('app state changed', currentUser, currentUser.email)

    return (
        <AppContainer>
            <Header {...{ currentUser }} />
            <Switch>
                <Route path='/'>{
                    !currentUser.email ? <Landing /> :
                        currentUser.isAdmin
                            ? <Admin {...{ currentUser }} />
                            : <Vendor {...{ currentUser }} />
                    }
                </Route>
                <Route path='/register'>
                    <Vendor {...{ currentUser }} />
                </Route>
                <Route path='/selectbooth'>
                    <h1>Select Booth</h1>
                    {/* <SelectBooth/> */}
                </Route>
            </Switch>
        </AppContainer>
    )
}