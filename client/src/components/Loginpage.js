import React, {useState, useContext} from 'react'
import { FormContext } from '../context/FormContext'

// const LinkedInProvider = new firebase.auth.LinkedInProvider()
function Loginpage(){ 

    const {signInWithGoogle, signInWithFacebook, logout, handleSignup, token, handleLogin} = useContext(FormContext)
    
    
    const initLogin = { 
        email: "", 
        password:"",
    }
    const [toggle, setToggle] = useState(false)
    const [login, setLogin] = useState(initLogin)

    
    
    function handleChange(e){ 
        const {name, value} = e.target
        setLogin((prev) => ({
            ...prev, 
            [name]: value
        }))
    }
    return(
    <div>
        <h1>Create Account</h1>
        <p>to reserve your booth at VetFest</p>
        <p>Email</p>
            <input
                type = "text"
                value = {login.email}
                name = "email" 
                onChange = {handleChange}></input>

                <p>Password</p>
                <input
                type = "password"
                value = {login.password}
                name = "password" 
                onChange = {handleChange}></input>
                
                <p></p>
                <input 
                    type = "radio"
                    onClick = {() => setToggle((prev) => !prev)}>
                </input>
                <span>I have read and accept the Terms of Service and Privacy Policy</span>
                <p></p>
                <p onClick = {() => {handleLogin(login.email, login.password)}}>Already have an account? Sign in</p>
                {toggle ? <button onClick = {() => handleSignup(login.email, login.password)} disabled = {false}>Create an Account</button> : <button disabled = {true} >Create an Account</button>}
                <p>or use</p>
                {toggle ? <button onClick = {() => signInWithGoogle()}>Google</button> :  <button disabled = {true} onClick = {() => signInWithGoogle()}>Google</button>}
                {toggle ? <button onClick = {() => signInWithFacebook()}>FaceBook</button> : <button disabled = {true} onClick = {() => signInWithFacebook()}>FaceBook</button>}
               {token ? <button onClick = {() => logout()}>Logout</button> : ""} 
                {/* <button onClick = {() => signInWithLinkedIn()}>LinkedIn</button> */}
    </div> 


    )
}


export default Loginpage