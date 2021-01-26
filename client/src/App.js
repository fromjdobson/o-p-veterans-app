import React, { useState, useEffect } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'
<<<<<<< HEAD
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
=======
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
import SelectSponsorLevel from './SelectSponsorLevel'
import PaymentCanceled from './pages/PaymentCanceled'
import PaymentSuccess from './pages/PaymentSuccess'
>>>>>>> 1bc8282592a45d321f2761c7bf85fddf61517b9d

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
<<<<<<< HEAD
    const [, setCurrentUser] = useContext(UserContext)
    const history = useHistory()

    // handleAuthChange(setCurrentUser,history)
=======
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
>>>>>>> 1bc8282592a45d321f2761c7bf85fddf61517b9d

    return (
        <div>
            <Header {...{ currentUser }} />
            <Switch>
                <Route path='/paymentcanceled'>
                    <PaymentCanceled/>
                </Route>
                <Route path='/paymentcomplete'>
                    <PaymentSuccess/>
                </Route>
                <Route path='/sponsorlevel'>
                    <SelectSponsorLevel />
                </Route>
                <Route path='/checkout'>
                    <CheckoutPage />
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
                    <BoothMap/>
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