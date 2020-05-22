import React from 'react'

import ProgressBar from './ProgressBar'
import StatusBar from './StatusBar'

import '../css/form-display.css'

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
            </form>
        </div>


    )
}

export default FormDisplay
