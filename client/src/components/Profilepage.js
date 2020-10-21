import React, {useContext, useState} from "react"
import { FormContext } from "../context/FormContext"
import { useHistory } from "react-router-dom"
import "../css/styles.css"




function Profile(){ 
    const [toggle, setToggle] = useState(true)
    const history = useHistory()
    const { handleChange, writeUserData, getUser, setUserState, logout, index, image, editBooth, ...userState } = useContext(FormContext)

    function updateFields(){ 
        setToggle(prev => !prev) 
        // write to db 
        writeUserData()
        // get the user from the db and update localstorage
        history.push("/thankyou")
    }


    function handleBoothEdit(){
        setUserState((prev) => ({ 
            ...prev, 
            hasPayed: true
        })) 
        // for new booth selection
        editBooth(index)
        history.push("/form6")
    }

    return( 
        <div className = "profile-form"> 
        <form>
        {/* <img id = "myimg" alt = "testimage"> </img> */}
        <h1>{`Welcome back ${userState?.email ? userState?.email : userState?.displayName} `}</h1> 
            <div>{ toggle ? 
            <>
                <h2>Address: {userState.address}</h2>
               
                </>
                : 
                <>
                <h2>Address: <input onChange = {(e) => handleChange(e)} type = "text" placeholder = {userState.address} name = "address" ></input></h2>
                </>}
                
            </div>
            <div>
                {toggle ?
                <> 
                    <h2>City: {userState.city}</h2>
                </>
                    : 
                    <>
                    <h2>City: <input onChange = {(e) => handleChange(e)} type = "text" placeholder = {userState.city} name = "city"></input></h2>
                    
                    </>
            }
                
            </div>
            <div>
                {toggle ? 
                <h2>State: {userState.state}</h2> 
                : 
                <>
                    <h2>State: <input onChange = {(e) => handleChange(e)} type = "text" placeholder = {userState.state} name = "state"></input></h2>
                   
                </>
        }
            </div>
            <div>
                {toggle ? 
                <h2>Booth Selected: {userState?.booth}</h2>
                : 
                    <h2>Booth Selected: <button onClick = {() => handleBoothEdit()}>Select New Booth</button></h2>
                   }
            </div>
            <div>
                {toggle ? <h2>Business Phone: {userState.businessPhone}</h2> : <h2>Business Phone: <input onChange = {(e) => handleChange(e)} type = "text" placeholder = {userState.businessPhone} name = 'businessPhone'></input></h2>}
                
            </div>
            <div>
               {toggle ? <h2>Company Name: {userState.companyName}</h2> : <h2> Company Name: <input onChange = {(e) => handleChange(e)} type = "text" placeholder = {userState.companyName} name = "companyName"></input></h2>} 
            </div>
            <div>
                {toggle ? <h2>Email: {userState.email}</h2> : <h2>Email: <input onChange = {(e) => handleChange(e)} type = "text" placeholder = {userState.email} name = "email"></input></h2>}
                
            </div>
            <div> 
                {toggle ? <h2>Need a Booth with power?: {userState.needPower ? "Yes" : "No"}</h2> : <h2>Need a Booth with Power?:<>
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
                {toggle ? <h2>Sponsorship Level: ${userState.value}</h2> : <h2>Sponsorship Level: <input onChange = {(e) => handleChange(e)} type = "text" placeholder = {userState.value} name = "value"></input></h2> }
                
            </div>
            <div>
                {toggle ? <h2>{`is ${userState.companyName} a non-profit or government agency?`}: {userState.nonProfit ? "Yes" : "No"}</h2>: <h2>{`is ${userState.companyName} a non-profit or government agency?`}:<label>
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
            <button className = "profile-button" onClick = {() => setToggle(prev => !prev)}>Edit</button> 
            <button className = "profile-button" onClick = {() => updateFields()}>Submit</button>
            <button className = "profile-button" onClick = {() => logout()}>Logout</button>
            <button className = "profile-button" onClick = {() => history.goBack()}>Back</button>
            {image?.map(image => 
                <img style = {{ objectFit: "scale-down", width: 500, height: 500}} src = {image} alt = "img"></img>
            )}
            {/* <img src = {image && image} alt = "img"></img> */}
        </div>
    )
}

export default Profile