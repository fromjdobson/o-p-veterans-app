import React from 'react'

import ProgressBar from './ProgressBar'
import StatusBar from './StatusBar'

import '../css/form1.css'
import inactiveCheckBox from '../images/icons/circle.svg'

const Form1 = () => {
    return (
        <div className='form1-container'>
            <div className='status-container'>
                    <ProgressBar />
                    <StatusBar />
                </div>
            <div className='container'>
                <div className='headline-container'>
                    <h1>Create an account</h1>
                    <p className='body-1'>to sponsor Vet Fest or register for a vendor booth.</p>
                </div>

                <form id='form1'>
                    <div className='inputs-container'>
                        <div className='input-container'>
                            <label><h3 className='label'>Email</h3></label>
                            <input type='text' id='emailInput' name='email'></input>
                            <p className='helper-text'>Helper Text</p>
                        </div>

                        <div className='input-container'>
                            <label><h3 className='label'>Password</h3></label>
                            <input type='text' id='passwordInput' name='password'></input>
                            <p className='helper-text'>Helper Text</p>
                        </div>

                        <div className='input-container'>
                            <label><h3 className='label'>Confirm Password</h3></label>
                            <input type='text' id='passwordConfirmInput' name='passwordConfirm'></input>
                            <p className='helper-text'>Helper Text</p>
                        </div>
                    </div>
                    <div className='terms-container'>
                        <img src={inactiveCheckBox} alt='Unchecked' />
                        <p className='terms'>I have read and accept the <span className='em-terms'>Terms of Service</span> and <span className='em-terms'>Privacy Policy</span>.</p>
                    </div>
                </form>
                <div className='button-container'>
                    <button type="submit" form="form1" value="Submit">CREATE AN ACCOUNT</button>
                </div>

                <div className='break-container'>
                    <div className='break-bar'></div>
                    <p className='body-1'>or use</p>
                    <div className='break-bar'></div>
                </div>

                <div className='button-container'>
                    <div className='google-button'></div>
                </div>
                <div className='already-member-container'>
                    <p className='body-2 stretch'>Already have an account with O.P. Veteran?</p>
                    <p className='body-1 stretch'>Log in here.</p>
                </div>
            </div>
        </div>
    )
}

export default Form1