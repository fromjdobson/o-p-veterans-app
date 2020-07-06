import React, { useContext } from "react"
import { FormContext } from "../context/FormContext"
import { useHistory, Link } from "react-router-dom"
import styles from '../css/Nonprofit.module.css'

function Nonprofit(){ 
    const { handleChange, companyName } = useContext(FormContext)
    const history = useHistory()
    console.log(companyName)
    function handleSubmit(){ 
        history.push("/form4")
    }
    return( 
        <div className={styles.container}>
            <form onSubmit = {handleSubmit}>
                <h1>Veteran Business & Nonprofit status</h1>
                <h2>just a little more info about {companyName}</h2>
                <p>Is {companyName} Veteran Owned?</p>
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
                <p>Is the business you are registering a non-profit?</p>
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
                <div className={styles.btnRow}>
                    <Link to ="/form2"><button className={styles.backBtn}>Back</button></Link>
                    <button className={styles.contBtn}>Continue</button>
                </div>
            </form>
        </div>
    )
}

export default Nonprofit