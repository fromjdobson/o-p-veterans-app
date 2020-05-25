import React from 'react'

import ProgressBar from './ProgressBar'
import StatusBar from './StatusBar'
import PreviewBox from './PreviewBox'

import '../css/form2.css'


const Form2 = () => {
    return (
        <div className='form-2-container'>
            <div className='status-container'>
                <ProgressBar />
                <StatusBar />
            </div>

            <div className='form2-headline-container'>
                <p className='body-1'>Thanks for creating an account, Joe Snuffy. Now, we need a little more information.</p>
            </div>

            <div className='form2-inputs-container'>

                <div className='company-container'>
                    <label><h3 className='label'>Company Name</h3></label>
                    <input type='text' id='companyNameInput' name='companyName' className='input-company-name'></input>
                    <p className='helper-text'>Helper Text</p>
                </div>

                <div className='phone-container'>
                    <label><h3 className='label'>Phone</h3></label>
                    <input type='text' id='phoneInput' name='phone' className='input-phone'></input>
                    <p className='helper-text'>Helper Text</p>
                </div>

            </div>

            <div className='form2-inputs-container'>

                <div className='address-container'>
                    <label><h3 className='label'>Address</h3></label>
                    <input type='text' id='addressInput' name='address' className='input-address'></input>
                    <p className='helper-text'>Helper Text</p>
                </div>

                <div className='apt-container'>
                    <label><h3 className='label'>Apt #</h3></label>
                    <input type='text' id='aptInput' name='apt' className='input-apt'></input>
                    <p className='apt-helper-text'>Helper Text</p>
                </div>

            </div>

            <div className='form2-inputs-container'>
                <div className='city-container'>
                    <label><h3 className='label'>City</h3></label>
                    <input type='text' id='cityInput' name='city' className='input-city'></input>
                    <p className='helper-text'>Helper Text</p>
                </div>

                <div className='state-container'>
                    <label><h3 className='label'>State</h3></label>
                    <input type='text' id='stateInput' name='state' className='input-state'></input>
                    <p className='helper-text'>Helper Text</p>
                </div>

                <div className='zipcode-container'>
                    <label><h3 className='label'>Zipcode</h3></label>
                    <input type='text' id='zipcodeInput' name='zipcode' className='input-zipcode'></input>
                    <p className='helper-text'>Helper Text</p>
                </div>
            </div>

            <div className='logo-upload-container'>
                <PreviewBox />
                <div className='upload-input-container'>
                    <button type="submit" className='upload-button' value="selectFile">Select file...</button>
                    <input type='text' id='uploadInput' name='upload' className='input-upload' placeholder='https://' disabled='true' />
                </div>
            </div>


        </div>
    )
}

export default Form2