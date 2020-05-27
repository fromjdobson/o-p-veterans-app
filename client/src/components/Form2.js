import React from 'react'

import LogoComponent from './LogoComponent'
import ProgressButtons from './ProgressButtons'

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

            <div className='form2-inputs-container'>
                <div className='company-address-container'>
                    <label for='companyAddressInput'><h4>Address</h4></label>
                    <input type='text' id='companyNameInput' name='companyAddressInput' />
                    <p className='helper-text'>Helper Text</p>
                </div>

                <div className='company-suite-container'>
                    <label for='companySuiteInput'><h4>Suite #</h4></label>
                    <input type='text' id='suiteInput' name='suiteInput' />
                    <p className='helper-text'>Helper Text</p>
                </div>
            </div>

            <div className='form2-inputs-container'>
                <div className='company-city-container'>
                    <label for='companyCityInput'><h4>City</h4></label>
                    <input type='text' id='companyCityInput' name='companyCityInput' />
                    <p className='helper-text'>Helper Text</p>
                </div>

                <div className='company-state-container'>
                    <label for='companyStateInput'><h4>State</h4></label>
                    <input type='text' id='companyStateInput' name='companyStateInput' />
                    {/* <p className='helper-text'>Helper Text</p> */}
                </div>

                <div className='company-zipcode-container'>
                    <label for='companyZipcodeInput'><h4>Zipcode</h4></label>
                    <input type='text' id='zipcodeInput' name='zipcodeInput' />
                    <p className='helper-text'>Helper Text</p>
                </div>
            </div>

            <div className='form2-inputs-container'>
                <div className='upload-container'>
                    <LogoComponent />
                    <button>SELECT IMAGE</button>
                </div>
            </div>
            <ProgressButtons />

        </div>
    )
}
export default Form2