import React, { useContext, useEffect, useState } from "react"
import { FormContext } from "../context/FormContext"

function Adminpage(){ 
    const { userBoothState } = useContext(FormContext)
    const [toggle, setToggle] = useState(true)

    // useEffect(() => {
    //     getUsersBoothSelection()
    //     // userBoothState.filter()
    // },[])

    return ( 
        <div> 
            {userBoothState?.map((i) => 
            <div style = {{border: "1px solid black" , background: "white", margin: "20px", padding: "20px"}}>
                <>
                {toggle ? 
                <>
                        <p>Company: {i.companyName && i.companyName}</p>
                        <p>Display Name: {i.displayName? i.displayName : ""}</p>
                        <p>Booth: {i.boothSelected ? i.boothSelected : ''}</p>
                        <p>Address: {i.address}</p>
                        <p>City: {i.city}</p>
                        <p>State: {i.state}</p>
                        <p>Zipcode: {i.zipCode}</p>
                        <p>Email: {i.email}</p>
                        <p>Need Power: {i.needPower}</p>
                        <p>Non Profit: {i.nonProfit}</p>
                        <p>SponsorShip Level: {i.value}</p>
                        <p>Veteran Owned: {i.veteranOwned}</p>
                        <button onClick = {() => setToggle(prev => !prev)}>Edit</button>
                </>
                            : 
                <>
                        <p>Company: <input type = "text" placeholder = {i.companyName}/></p>
                        <p>Display Name: <input type = "text" placeholder = {i.displayName}/></p>
                        <p>Booth: <input type = "text" placeholder = {i.boothSelected}/></p>
                        <p>Address: <input type = "text" placeholder = {i.address}/></p>
                        <p>City: <br></br>  <input type = "text" placeholder = {i.city}/></p>
                        <p>State: <input type = "text" placeholder = {i.state}/></p>
                        <p>Zipcode: <input type = "text" placeholder = {i.zipCode}/></p>
                        <p>Email: <input type = "text" placeholder = {i.email}/></p>
                        <p>Need Power: <input type = "text" placeholder = {i.needPower}/></p>
                        <p>Non Profit: <input type = "text" placeholder = {i.nonProfit}/></p>
                        <p>SponsorShip Level: <input type = "text" placeholder = {i.value}/></p>
                        <p>Veteran Owned: <input type = "text" placeholder = {i.veteranOwned}/></p>
                        <button onClick = {() => setToggle(prev => !prev)}>Submit</button>
                </>
                }
                </>
                
            </div>
            )}
        </div>
    )
}

export default Adminpage