import React from 'react'

import ProgressBar from './ProgressBar'
import StatusBar from './StatusBar'

import '../css/form2.css'


const Form2 = () => {
    return (
        <div className='form-2-container'>
            <div className='status-container'>
                <ProgressBar />
                <StatusBar />
            </div>

            <div className='headline-container'>
                <p className='body-1'>Thanks for creating an account, Joe Snuffy. Now, we need a little more information.</p>
            </div>

            <div className='input-container'>
                <label><h3 className='label'>Password</h3></label>
                <input type='text' id='passwordInput' name='password'></input>
                <p className='helper-text'>Helper Text</p>
            </div>

        </div>
    )
}

export default Form2