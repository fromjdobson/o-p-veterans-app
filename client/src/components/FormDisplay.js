import React from 'react'

import ProgressBar from './ProgressBar'
import StatusBar from './StatusBar'

import '../css/form-display.css'
import inactiveCheckBox from '../images/icons/circle.svg'

const FormDisplay = () => {
    return (
        <div className='form-display-container'>

            <ProgressBar />
            <StatusBar />

            <div className='headline-container'>
                <h1>Create an account</h1>
                <p className='body-1'>to sponsor Vet Fest or register for a vendor booth.</p>
            </div>

            <form id='form1'>
                <div className='inputs-container'>
                    <div className='input-container'>
                        <label for='email'><h3 className='label'>Email</h3></label>
                        <input type='text' id='emailInput' name='email'></input>
                        <p className='helper-text'>Helper Text</p>
                    </div>

                    <div className='input-container'>
                        <label for='password'><h3 className='label'>Password</h3></label>
                        <input type='text' id='passwordInput' name='password'></input>
                        <p className='helper-text'>Helper Text</p>
                    </div>

                    <div className='input-container'>
                        <label for='confirmPassword'><h3 className='label'>Confirm Password</h3></label>
                        <input type='text' id='passwordConfirmInput' name='passwordConfirm'></input>
                        <p className='helper-text'>Helper Text</p>
                    </div>
                </div>
                <div className='terms-container'>
                    <img src={inactiveCheckBox} alt='Unchecked' />
                    <p className='terms'>I have read and accept the <span className='em-terms'>Terms of Service</span> and <span className='em-terms'>Privacy Policy</span>.</p>
                </div>
            </form>

            <button type="submit" form="form1" value="Submit">CREATE AN ACCOUNT</button>
        </div>


    )
}

export default FormDisplay
