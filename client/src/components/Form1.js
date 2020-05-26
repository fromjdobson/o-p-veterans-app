import React from 'react'

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

        </div>
    )
}
export default Form1