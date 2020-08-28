import React, {useState, useContext} from 'react'
import { FormContext } from '../context/FormContext'

function Allusers(props){ 
    const [toggle, setToggle] = useState(true)
    const {editUsers, handleChange} = useContext(FormContext)
    function handleSubmit(id){ 
        setToggle(prev => !prev)
        editUsers(id)
    }

    
    return(
        <div>
            <div style = {{border: "1px solid black" , background: "white", margin: "20px", padding: "20px"}}>
                <>
                {toggle ? 
                <>
                        <p>Company: {props && props.users.companyName}</p>
                        <p>Display Name: {props? props.users.displayName : ""}</p>
                        <p>Booth: {props ? props.users.boothSelected : ''}</p>
                        <p>Address: {props.users.address}</p>
                        <p>City: {props.users.city}</p>
                        <p>State: {props.users.state}</p>
                        <p>Zipcode: {props.users.zipCode}</p>
                        <p>Email: {props.users.email}</p>
                        <p>Need Power: {props.users.needPower}</p>
                        <p>Non Profit: {props.users.nonProfit}</p>
                        <p>SponsorShip Level: {props.users.value}</p>
                        <p>Veteran Owned: {props.users.veteranOwned}</p>
                        <button onClick = {() => setToggle(prev => !prev)}>Edit</button>
                </>
                            : 
                <>
                        <p>Company: <input type = "text" placeholder = {props.users.companyName} onChange = {(e) => handleChange(e)} name = "companyName"/></p>
                        <p>Display Name: <input type = "text" placeholder = {props.users.displayName} onChange = {(e) => handleChange(e)} name = "displayName" /></p>
                        <p>Booth: <input type = "text" placeholder = {props.users.boothSelected} onChange = {(e) => handleChange(e)} name = "boothSelected"/></p>
                        <p>Address: <input type = "text" placeholder = {props.users.address} onChange = {(e) => handleChange(e)} name = "address" /></p>
                        <p>City: <br></br>  <input type = "text" placeholder = {props.users.city} onChange = {(e) => handleChange(e)} name = "city" /></p>
                        <p>State: <input type = "text" placeholder = {props.users.state} onChange = {(e) => handleChange(e)} name = "state" /></p>
                        <p>Zipcode: <input type = "text" placeholder = {props.users.zipCode} onChange = {(e) => handleChange(e)} name = "zipCode" /></p>
                        <p>Email: <input type = "text" placeholder = {props.users.email} onChange = {(e) => handleChange(e)} name = "email" /></p>
                        <p>Need Power: <input type = "text" placeholder = {props.users.needPower} onChange = {(e) => handleChange(e)} name = "needPower" /></p>
                        <p>Non Profit: <input type = "text" placeholder = {props.users.nonProfit} onChange = {(e) => handleChange(e)} name = "nonProfit"/></p>
                        <p>SponsorShip Level: <input type = "text" placeholder = {props.users.value} onChange = {(e) => handleChange(e)} name = "value" /></p>
                        <p>Veteran Owned: <input type = "text" placeholder = {props.users.veteranOwned} onChange = {(e) => handleChange(e)} name = "veteranOwned"/></p>
                        <button onClick = {() => handleSubmit(props.users.uid)}>Submit</button>
                </>
                }
                </>
                
            </div>
        </div>
    )
}

export default Allusers