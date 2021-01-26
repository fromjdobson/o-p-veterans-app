import React, { useState, useEffect } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'
import { auth } from './firebase'
import { Landing } from './pages/index'
import { Admin } from './pages/index'
import { Vendor } from './pages/index'
import { Header } from './components/Header'
import { findUserByEmail, addUser } from './firestoreCRUD'
import userModel from './userModel'
import handleErrors from './reusables/defaultErrorHandler'
import BoothMap from './BoothMap'
import CheckoutPage from './CheckoutPage'

export default function App() {
    const [currentUser, setCurrentUser] = useState({})
    const history = useHistory()

    useEffect(() => {
        !currentUser.email && auth.onAuthStateChanged((user) => {
            console.log('Auth state changed. User is', user ? 'authenticated' : 'logged out', user)
            if (user) {
                findUserByEmail(user.email).then((data) => {
                    let opvetUser = userModel(user)
                    if (data.length === 0) { addUser(opvetUser) }
                    else { opvetUser = data[0] }
                    setCurrentUser(opvetUser)
                })
            } else if (user === null) {
                currentUser.email && setCurrentUser({})
            }
        })
    }, [])

    useEffect(() => {
        if (!currentUser.email) { history.push('/') }
        else if (currentUser.isAdmin) { history.push('/admin') }
        else if (currentUser.isRegistrationComplete === true) { history.push('/selectbooth') }
        else if (currentUser.isRegistrationComplete === false) { history.push('/register/1') }
    }, [currentUser])

    return (
        <div>
            <Header {...{ currentUser }} />
            <Switch>
                <Route path='/'> 
                    <CheckoutPage/>
                </Route>
                <Route path='/logout'>
                    {() => {
                        auth.signOut().then(() => { history.push('/') }).catch(handleErrors)
                        return <div>Logged Out</div>
                    }}
                </Route>
                <Route path='/register'>
                    <Vendor {...{ currentUser, setCurrentUser }} />
                </Route>
                <Route path='/selectbooth'>
                    <BoothMap blockPullFromDB/>
                </Route>
                <Route path='/admin'>
                    <Admin {...{ currentUser }} />
                </Route>
                <Route path='/'>
                    <Landing />
                </Route>
                {/* <Route path=''>  </Route> */}
            </Switch>
        </div>
    )
}