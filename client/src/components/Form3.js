import React from 'react'

import ProgressButtons from './ProgressButtons'

import '../css/form3.css'

const Form3 = () => {
    return (
        <div className='form3-container'>

            <div className='headline-container'>
                <h1>Exemption Status</h1>
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

            <div className='radio-selection-container'>
                <h4>Do you have a 501(c)3 Tax Exemption?</h4>
                <div className='radio-selection'>
                    <input type='radio' id='vetOwned' name='vetOwned' className='radio-button'></input>
                    <label for='vetOwned' className='radio-button-label'>Yes</label>
                </div>

                <div className='radio-selection'>
                    <input type='radio' id='notVetOwned' name='notVetOwned' className='radio-button'></input>
                    <label for='notVetOwned' className='radio-button-label'>No</label>
                </div>
            </div>

            <div className='coupon-code-container'>
                <label for='couponCodeInput'><h4>If you have a coupon code, please share it below.</h4></label>
                <input type='text' id='couponCodeInput' name='couponCodeInput' />
                <p className='helper-text'>Example: 999-999</p>
            </div>
            <ProgressButtons />
        </div>
    )
}
export default Form3