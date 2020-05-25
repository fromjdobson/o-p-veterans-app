import React from 'react'


import ProgressBar from './ProgressBar'
import StatusBar from './StatusBar'
import ProgressButtons from './ProgressButtons'


import '../css/form3.css'

const Form3 = () => {
    return (
        <div className='form3-container'>
            <div className='status-container'>
                <ProgressBar />
                <StatusBar />
            </div>
            
            <div className='form2-headline-container'>
                <p className='body-1'>Thanks for creating an account, Joe Snuffy. Now, we need a little more information.</p>
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
                <h4>Is this a non-profit organization?</h4>
                <div className='radio-selection'>
                    <input type='radio' id='nonProfit' name='nonProfit' className='radio-button'></input>
                    <label for='nonProfit' className='radio-button-label'>Yes</label>
                </div>

                <div className='radio-selection'>
                    <input type='radio' id='notNonProfit' name='notNonProfit' className='radio-button'></input>
                    <label for='notNonProfit' className='radio-button-label'>No</label>
                </div>
            </div>

            <div className='coupon-input-container'>
                <h4>If you have a coupon code, please share it with us.</h4>
                <input type='text' className='input-coupon'></input>
            </div>

            <ProgressButtons />

        </div>
            
    )
}

export default Form3