import React, { useContext, useState } from "react"
import { FormContext } from "../context/FormContext"

function Sponsorshiplevels(){ 
    const {sponsorShipLevel, handleChange} = useContext(FormContext)
    const [checked, setChecked] = useState(false)
    const sponsorArray = [
    {
        name:"paladin", 
        value: 10000, 
    }, 
    { 
        name:"abrams", 
        value: 5000

    }, 
    { 
        name: "stryker", 
        value: 2500
    },
    {
        name: "bradley",
        value: 1000
    }, 
    { 
        name: "amtrack", 
        value: 500, 
    },
    {
        name:"wla", 
        value: 250
    },
]
    return( 
        <div>
            <form>
                <h1>Sponsorship Level</h1>
               {sponsorArray.map(item => 
               <div onClick = {() => {console.log("clicked")}}>
                   <h1>{item.name}</h1>
                   <p>{item.value}</p>
                </div>
               )}
            </form>
            {console.log(sponsorShipLevel)}
        </div> 
    )
}

export default Sponsorshiplevels