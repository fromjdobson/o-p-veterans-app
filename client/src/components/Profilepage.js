import React, {useContext, useState, useEffect} from "react"
import { FormContext } from "../context/FormContext"
import { useHistory } from "react-router-dom"
import "../css/styles.css"




function Profile(){ 
    const [toggle, setToggle] = useState(true)
    const history = useHistory()
    const {userProfile, handleChange, writeUserData, getUser, setUserState, logout, editBooth} = useContext(FormContext)

    function updateFields(){ 
        setToggle(prev => !prev)
        writeUserData()
        getUser()
    }

    

    function handleBoothEdit(e){
        e.preventDefault()
        setUserState((prev) => ({ 
            ...prev, 
            hasPayed: true
        })) 
        editBooth(userProfile.boothSelected)
        history.push("/form6")
    }

    return( 
        <div className = "profile-form"> 
        <form>
        <h1>{`Welcome back, ${userProfile.displayName}`}</h1> 
            <div>{ toggle ? 
            <>
                <h2>Address: {userProfile.address}</h2>
               
                </>
                : 
                <>
                <h2>Address: <input onChange = {(e) => handleChange(e)} type = "text" placeholder = {userProfile.address} name = "address" ></input></h2>
                </>}
                
            </div>
            <div>
                {toggle ?
                <> 
                    <h2>City: {userProfile.city}</h2>
                </>
                    : 
                    <>
                    <h2>City: <input onChange = {(e) => handleChange(e)} type = "text" placeholder = {userProfile.city} name = "city"></input></h2>
                    
                    </>
            }
                
            </div>
            <div>
                {toggle ? 
                <h2>State: {userProfile.state}</h2> 
                : 
                <>
                    <h2>State: <input onChange = {(e) => handleChange(e)} type = "text" placeholder = {userProfile.state} name = "state"></input></h2>
                   
                </>
        }
            </div>
            <div>
                {toggle ? 
                <h2>Booth Selected: {userProfile.boothSelected}</h2>
                : 
                    <h2>Booth Selected: <button onClick = {(e) => handleBoothEdit(e)}>Select New Booth</button></h2>
                   }
            </div>
            <div>
                {toggle ? <h2>Business Phone: {userProfile.businessPhone}</h2> : <h2>Business Phone: <input onChange = {(e) => handleChange(e)} type = "text" placeholder = {userProfile.businessPhone} name = 'businessPhone'></input></h2>}
                
            </div>
            <div>
               {toggle ? <h2>Company Name: {userProfile.companyName}</h2> : <h2> Company Name: <input onChange = {(e) => handleChange(e)} type = "text" placeholder = {userProfile.companyName} name = "companyName"></input></h2>} 
            </div>
            <div>
                {toggle ? <h2>Email: {userProfile.email}</h2> : <h2>Email: <input onChange = {(e) => handleChange(e)} type = "text" placeholder = {userProfile.email} name = "email"></input></h2>}
                
            </div>
            <div> 
                {toggle ? <h2>Need a Booth with power?: {userProfile.needPower ? "Yes" : "No"}</h2> : <h2>Need a Booth with Power?:<>
                <label>
                    <br></br>
                <input
                    type="radio"
                    name="needPower"
                    value={true}
                    onChange={(e) => handleChange(e)}
                ></input>
                    Yes (additional charges may apply)
                </label>
                <label>
                <input
                    type="radio"
                    name="needPower"
                    value={false}
                    onChange={(e) => handleChange(e)}
                >
                </input>
                    No
                </label>
          </></h2>}
                
            </div>
            <div>
                {toggle ? <h2>Sponsorship Level: ${userProfile.value}</h2> : <h2>Sponsorship Level: <input onChange = {(e) => handleChange(e)} type = "text" placeholder = {userProfile.value} name = "value"></input></h2> }
                
            </div>
            <div>
                {toggle ? <h2>{`is ${userProfile.companyName} a non-profit or government agency?`}: {userProfile.nonProfit ? "Yes" : "No"}</h2>: <h2>{`is ${userProfile.companyName} a non-profit or government agency?`}:<label>
          <input
            type="radio"
            name="nonProfit"
            value={true}
            onChange={handleChange}
          ></input>
          Yes
        </label>
        <label>
          <input
            type="radio"
            name="nonProfit"
            value={false}
            onChange={handleChange}
          ></input>
          No (may require sponsorship)
        </label></h2>}
                
            </div>
            </form>
            <button onClick = {() => setToggle(prev => !prev)}>Edit</button> 
            <button onClick = {() => updateFields()}>Submit</button>
            <button onClick = {() => logout()}>Logout</button>
        </div>
    )
}

export default Profile