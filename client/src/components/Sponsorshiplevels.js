import React, { useContext, useState } from "react"
import { FormContext } from "../context/FormContext"
import { Link, useHistory } from "react-router-dom"

function Sponsorshiplevels(){ 
    const {qty, value, handleChange, handleSubmit, writeUserData, companyName, coupon, checkCoupon} = useContext(FormContext)
    const sponsorArray = [
    {
        name:"paladin", 
        value: 10000,
        description: "O.P.V. Paladin Level Sponsorship Website Sponsorship Social Announcement Recognition at Event Logo on Event Flyers Logo on Event Shirts Swag Distribution Radio Endorsement TV Endorsement Vendor at Event"
    }, 
    { 
        name:"abrams", 
        value: 5000,
        description:"O.P.V. Abrams Level Sponsorship Website Sponsorship Social Announcement Recognition at Event Logo on Event Flyers Logo on Event Shirts Swag Distribution Radio Endorsement TV Endorsement Vendor at Event" 

    }, 
    { 
        name: "stryker", 
        value: 2500,
        description:"O.P.V. Stryker Level Sponsorship Website Sponsorship Social Announcement Recognition at Event Logo on Event Flyers Logo on Event Shirts Swag Distribution Radio Endorsement Vendor at Event"
    },
    {
        name: "bradley",
        value: 1000,
        description:"O.P.V. Bradley Level Sponsorship Website Sponsorship Social Announcement Recognition at Event Logo on Event Flyers Logo on Event Shirts Swag Distribution Vendor at Event"
    }, 
    { 
        name: "amtrack", 
        value: 500,
        description:"O.P.V. Amtrak Level Sponsorship Website Sponsorship Social Announcement Recognition at Event Logo on Event Flyers"
    },
    {
        name:"wla", 
        value: 250,
        description:"O.P.V. WLA Level Sponsorship Website Sponsorship Social Announcement Recognition at Event" 
    }
]
    const history = useHistory()
    const [toggle, setToggle] = useState(false)
    function addtoDB(){ 
       history.push("/form5")
       writeUserData(companyName, qty, value)
    }
    
   
    return( 
        <div>
            <div>
                
                <h1>Sponsorship Level</h1>
               {sponsorArray.map(item => 
                <div onClick = {() => handleSubmit(item.value)} key = {item.name}>
                        <h1>{item.name}</h1>
                        <p>{item.value}</p>
                        <p>{item.description}</p>
                </div>
               )}
               <p>Qty:</p>
                <input type = "text" name = "qty" value = {qty} onChange = {handleChange}></input>
               <p>Total: {qty * value}</p>
               <button onClick = {() => addtoDB()}>Continue</button>
               {!toggle ? 
               <div onClick = {() => setToggle(prev => !prev)}>
                   have a coupon code? Enter it here
               </div> : 
               <div>
                    <input type = "text" name = "coupon" value = {coupon} onChange = {handleChange}></input>
                    <button onClick = {() => checkCoupon(coupon) }>Submit</button>
               </div>
               }
               <p></p>
               <Link to = "/form3">Back</Link>
            </div>
        </div> 
    )
}

export default Sponsorshiplevels