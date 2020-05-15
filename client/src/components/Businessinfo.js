import React, { useContext } from 'react'
import { FormContext } from '../context/FormContext'
import { useHistory } from "react-router-dom"


function Businessinfo(){ 
    const {companyName, handleChange, address, city, businessPhone, aptNumber, state, zipCode} = useContext(FormContext)
    const history = useHistory()

    function handleSubmit(){ 
        history.push("/form3")
    }

    return( 
        <div> 
            <form onSubmit = {handleSubmit}>
                <p>Company Name</p>
                <input
                    type = "text"
                    name = "companyName"
                    value = {companyName}
                    onChange = {handleChange}
                    required = {true}
                >
                </input>
                <p>Address</p>
                <input
                    type = "text"
                    name = "address"
                    value = {address}
                    onChange = {handleChange}
                    required = {true}
                >
                </input>
                <p>City</p>
                <input
                    type = "text"
                    name = "city"
                    value = {city}
                    onChange = {handleChange}
                    required = {true}
                >
                </input> 
                <p>Phone</p>
                <input
                    type = "number"
                    name = "businessPhone"
                    value = {businessPhone}
                    onChange = {handleChange}
                    required = {true}
                > 
                </input>
                <p>Apt #</p>
                <input
                    type = "text"
                    name = "aptNumber"
                    value = {aptNumber}
                    onChange = {handleChange}
                > 
                </input>
                <p>State</p>
                <input
                    type = "text"
                    name = "state"
                    value = {state}
                    onChange = {handleChange}
                    required = {true}
                > 
                </input>
                <p>Zip Code</p>
                <input
                    type = "text"
                    name = "zipCode"
                    value = {zipCode}
                    onChange = {handleChange}
                    required = {true}
                > 
                </input>
                <button>Continue</button>
            </form>
            
        </div>
    )
}

export default Businessinfo