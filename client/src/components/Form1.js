import React from 'react'

import termsCheckDefault from '../images/icons/circle.svg'
import googleLogo from '../images/google-button-2.svg'
import '../css/form1.css'

const Form1 = () => {
    return (
        <div className='form1-container'>
            <div className='headline-container'>
                <h1>Create an account</h1>
                <p className='body2'>to sponsor Vet Fest, or register for a vendor space.</p>
            </div>

            <div className='form-inputs-container'>
                <div className='input-item-containter'>
                    <label for='emailInput'><h4>Email</h4></label>
                    <input type='text' id='emailInput' name='emailInput' />
                    <p className='helper-text'>Helper Text</p>
                </div>

                <div className='input-item-containter'>
                    <label for='passwordInput'><h4>Password</h4></label>
                    <input type='text' id='passwordInput' name='passwordInput' />
                    <p className='helper-text'>Helper Text</p>
                </div>

                <div className='input-item-containter'>
                    <label for='passwordInput'><h4>Password <span className='subtitle'>(confirm)</span></h4></label>
                    <input type='text' id='passwordInput' name='passwordInput' />
                    <p className='helper-text'>Helper Text</p>
                </div>
            </div>

            <div className='terms-container'>
                <img src={termsCheckDefault} alt='Unchecked' />
                <p className='subtitle'>I have read and accept the <span className='body2'>Terms of Service</span> and <span className='body2'>Privacy Policy</span>.</p>
            </div>
            
            <button>CREATE AN ACCOUNT</button>

            <div className='break-container'>
                <div className='break-bar'></div>
                <p className='body1'>or use</p>
                <div className='break-bar'></div>
            </div>

            <div className='google-button-container'>
                <img src={googleLogo} alt='Google Signin' />
                <p className='google'>SIGN IN WITH GOOGLE</p>
            </div>

            <div className='new-google-button'>

            </div>

            <div className='member-container'>
                <p className='body1'>Already have an account with O.P. Veteran?</p>
                <p className='body2'>Log in here</p>

            </div>
        </div>
    )
}
export default Form1