import React from 'react'

import '../css/form3.css'

const Form3 = () => {
    return (
        <div className='form3-container'>

            <div className='headline-container'>
                <h1>Business Information</h1>
                <p className='body2'>Thanks for creating an account. Now, just a bit more information.</p>
            </div>
            
            <div className='radio-selection-container'>
                <h4>Is this organization veteran owned?</h4>
                <div className='radio-selection'>
                    <input type='radio' id='vetOwned' name='vetOwned' className='radio-button'></input>
                    <label for='vetOwned' className='radio-button-label'>Yes</label>
                </div>

                <div className='radio-selection'>
                    <input type='radio' id='notVetOwned' name='notVetOwned' className='radio-button'></input>
                    <label for='notVetOwned' className='radio-button-label'>No</label>
                </div>
            </div>
        </div>
    )
}
export default Form3