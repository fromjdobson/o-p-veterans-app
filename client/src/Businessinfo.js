import React, { useContext } from 'react'
import { FormContext } from '../context/FormContext'
import { useHistory, Link } from "react-router-dom"
import styles from '../css/BusinessInfo.module.css'


function Businessinfo(){ 
    const {companyName, handleChange, address, city, businessPhone, aptNumber, state, zipCode} = useContext(FormContext)
    const history = useHistory()

    function handleSubmit(){ 
        history.push("/form3")
    }

    return( 
        <div className={styles.businessContainer}> 
            <form className={styles.form} onSubmit = {handleSubmit}>
            <div className={styles.row1}>
                <div className={styles.company}>
                <label>Company Name</label>
                <input
                    type = "text"
                    name = "companyName"
                    value = {companyName}
                    onChange = {handleChange}
                    required = {true}
                >
                </input>
                </div>

                <div className={styles.phone}>
                <label>Phone</label>
                <input
                    type = "text"
                    name = "businessPhone"
                    value = {businessPhone}
                    onChange = {handleChange}
                    required = {true}
                    > 
                </input>
                </div>
            </div>

            <div className={styles.row2}>
                <div className={styles.address}>
                <label>Address</label>
                <input
                    type = "text"
                    name = "address"
                    value = {address}
                    onChange = {handleChange}
                    required = {true}
                >
                </input>
                </div>

                <div className={styles.apt}>
                <label>Apt #</label>
                <input
                    type = "text"
                    name = "aptNumber"
                    value = {aptNumber}
                    onChange = {handleChange}
                > 
                </input>
                </div>
            </div>
            

            <div className={styles.row3}>
                <div className={styles.city}>
                <label>City</label>
                <input
                    type = "text"
                    name = "city"
                    value = {city}
                    onChange = {handleChange}
                    required = {true}
                >
                </input> 
                </div>
        
                <div className={styles.state}>
                <label>State</label>
                <input
                    type = "text"
                    name = "state"
                    value = {state}
                    onChange = {handleChange}
                    required = {true}
                > 
                </input>
                </div>

                <div className={styles.zip}>
                <label>Zip Code</label>
                <input
                    type = "text"
                    name = "zipCode"
                    value = {zipCode}
                    onChange = {handleChange}
                    required = {true}
                > 
                </input>
                </div>
            </div>

            <div className={styles.rowBtn}>
                <Link to ="/form1"><button className={styles.backBtn}>Back</button></Link>
                <button className={styles.contBtn}>Continue</button>
            </div>
            </form>            
        </div>
    )
}

export default Businessinfo