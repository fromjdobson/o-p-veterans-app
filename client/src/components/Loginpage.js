import React, {useState, useContext, useEffect} from 'react'
import { FormContext } from '../context/FormContext'

// const LinkedInProvider = new firebase.auth.LinkedInProvider()
function Loginpage(){ 

    const {signInWithGoogle, signInWithFacebook, logout, handleSignup, token, handleLogin, errorMessage, checkedPassword} = useContext(FormContext)
    const initToggle = { 
        privacyAgreement: false, 
        login: false
    }
    
    const initLogin = { 
        email: "", 
        password:"",
        confirmPassword: "",
    }
    const [toggle, setToggle] = useState(initToggle)
    const [login, setLogin] = useState(initLogin)
    const [message, setMessage] = useState("")

    function checkPasswords(){ 
        let results = login.password.localeCompare(login.confirmPassword)
        if(results === 0){ 
            handleSignup(login.email, login.password)
            setMessage("Account Created Successfully")
        } else 
        setMessage("passwords do not match, please try again")
    }

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
                {!toggle.login ?
                <> 
                    <p>Confirm Password</p>
                    <input type = "password"
                    value = {login.confirmPassword}
                    name = "confirmPassword"
                    onChange = {handleChange}>
                    </input> 
                </>
                    : "" }

                <p style = {{color: "red"}}>{message}</p>
                
                <div>{errorMessage ? <p style = {{color: "red"}}>{errorMessage}</p> : ""}</div>
                <input 
                    type = "radio"
                    onClick = {() => setToggle((prev) => ({ 
                        ...prev, 
                        privacyAgreement: !prev.privacyAgreement
                    }))}/>
                <span>I have read and accept the Terms of Service and Privacy Policy</span>
                <p></p>
                <p onClick = {() => setToggle((prev) => ({ 
                    ...prev, 
                    login: !prev.login
                }))}>Already have an account? Sign in</p>
                {toggle.login ? <button onClick = {() => handleLogin(login.email, login.password)}>Login</button> : null}
                
                {!toggle.login && toggle.privacyAgreement ? <button onClick = {() => checkPasswords()} disabled = {false}>Create an Account</button> : null}
                <p>or use</p>
                {toggle.privacyAgreement ? <button onClick = {() => signInWithGoogle()}>Google</button> :  <button disabled = {true} onClick = {() => signInWithGoogle()}>Google</button>}
                {toggle.privacyAgreement ? <button onClick = {() => signInWithFacebook()}>FaceBook</button> : <button disabled = {true} onClick = {() => signInWithFacebook()}>FaceBook</button>}
               {token ? <button onClick = {() => logout()}>Logout</button> : ""} 
                {/* <button onClick = {() => signInWithLinkedIn()}>LinkedIn</button> */}
    </div> 


    )
}


export default Loginpage