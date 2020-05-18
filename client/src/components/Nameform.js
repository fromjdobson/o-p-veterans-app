import React, { useContext } from 'react'
import { FormContext } from '../context/FormContext'
import { Link } from "react-router-dom"




function Nameform(){ 
    const {firstName, lastName, handleChange, phoneNumber, logout} = useContext(FormContext)

    


    return(
        <div>
            <h1> Let us get to know you </h1>
            <p>First name</p>
            <input 
                type = "text"
                name = "firstName"
                value = {firstName}  
                onChange = {handleChange}  
            ></input>
            <p>Last Name</p>
            <input
                type = "text"
                name = "lastName"
                value = {lastName}
                onChange = {handleChange}
            >
            </input>
            <p>Phone Number</p>
            <input
                type = "number"
                name = "phoneNumber"
                value = {phoneNumber}
                onChange = {handleChange}
            >
            </input>
            <Link exact to = "/form2">Continue</Link>
            <button onClick = {() => logout()}>Logout</button>
        </div> 
    )
}

export default Nameform