import React, {useState} from 'react'
import Registration from '../Registration.module.css'
import arrow from '../assets/icons/arrow-right-icon.svg'
import { Link, Switch, Route, useLocation } from 'react-router-dom'
import {updateUser} from '../firestoreCRUD'

export default function Vendor({ currentUser, setCurrentUser }) {
    const [input,setInput] = useState(currentUser.name || '')
    const path = useLocation().pathname

    if(path==='/register/6'){
        const userRegistered = {...currentUser,isRegistrationComplete:true}
        updateUser(currentUser).then(()=>{
            setCurrentUser(userRegistered)
        })
    }

    const step = Number(path.split('/')[2]) + 1
    const next = '/register/' + step
    const userName = currentUser.name || ''


    function handleChange(e){
        e.preventDefault()
        setInput(e.target.value)
    }
    return (

        <div id={Registration['registration-page']}>
            <div></div>

            <Switch>
                <Route path='*register/1'>
                <div className={Registration['status-message-open']}> Congrats! You have created an account on O.P. Veteran. Now, please continue
                the
                registration.</div>
                <h1>Welcome {userName}!</h1>
                <h4>Before selecting your booth, let’s get some more point of contact information.</h4>
                </Route>
                <Route>
                    <div></div>
                    <h1></h1>
                    <h4></h4>
                </Route>
            </Switch>

            <label htmlFor='name'>
                <Switch>
                    <Route path='*register/1'>Let’s start with verifying your name.</Route>
                    <Route path='*register/2'>What is your phone number?</Route>
                    <Route path='*register/3'>What is your zip code?</Route>
                    <Route path='*register/4'>Now your Mailing Address?</Route>
                    <Route path='*register/5'>Is your org veteran owned?</Route>
                    <Route path='*register/6'>Is your ?</Route>
                </Switch>
            </label>

            <div className={Registration['input-container']}>
                <input type="name" id="name" value={input} onChange={handleChange}/>
            </div>

            <Link className={Registration['next-button']} to={next}>
                <h4>Next</h4>
                <img width="20px" src={arrow} alt="" />
            </Link>

            <div className={Registration['progress-bar']}>
                <label htmlFor="progress">10% completed</label>
                <progress id="progress" value="0.1">75%</progress>
            </div>

        </div>

    )
}
