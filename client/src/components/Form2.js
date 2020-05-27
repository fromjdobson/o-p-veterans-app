import React from 'react'

import '../css/form2.css'

const Form2 = () => {
    return (
        <div className='form2-container'>
            <div className='headline-container'>
                <h1>Business Information</h1>
                <p className='body2'>Thanks for creating an account. Now, just a bit more information.</p>
            </div>

            <div className='form2-inputs-container'>
                <div className='company-name-container'>
                    <label for='companyNameInput'><h4>Company Name</h4></label>
                    <input type='text' id='companyNameInput' name='companyNameInput' />
                    <p className='helper-text'>Helper Text</p>
                </div>

                <div className='company-phone-container'>
                    <label for='companyNameInput'><h4>Phone</h4></label>
                    <input type='text' id='phoneInput' name='phoneInput' />
                    <p className='helper-text'>Helper Text</p>
                </div>
            </div>


        </div>
    )
}
export default Form2