import React, { useContext } from "react"
import { FormContext } from "../context/FormContext"
import { useHistory } from "react-router-dom"

function Nonprofit(){ 
    const { handleChange } = useContext(FormContext)
    const history = useHistory()
    function handleSubmit(){ 
        history.push("/form4")
    }
    return( 
        <div>
            <form onSubmit = {handleSubmit}>
                <h1>Veteran Business & Nonprofit status</h1>
                <p>is the business you are registering "Veteran Owned"</p>
                <label> 
                    
                    <input
                        type = "radio"
                        name = "veteranOwned"
                        value = {true}
                        onChange = {handleChange}
                        required = {true}
                    >
                    </input>
                    Yes
                </label>

                <label> 
                    
                    <input
                        type = "radio"
                        name = "veteranOwned"
                        value = {false}
                        onChange = {handleChange}
                    >
                    </input>
                    No (may require sponsorship)
                </label>
                <h1>Non Profit Status</h1>
                <p>is the business you are registering a non-profit</p>
                <label> 
                    
                    <input
                        type = "radio"
                        name = "nonProfit"
                        value = {true}
                        onChange = {handleChange}
                        
                    >
                    </input>
                    Yes
                </label>
                <label> 
                    
                    <input
                        type = "radio"
                        name = "nonProfit"
                        value = {false}
                        onChange = {handleChange}
                        required = {true}
                    >
                    </input>
                    No (may require sponsorship)
                </label>

                <button>Continue</button>
            </form>
        </div>
    )
}

export default Nonprofit