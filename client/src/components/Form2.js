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
            <div className='container'>
                <div className='headline-container'>
                    {/* <h1>Create an account</h1> */}
                    <p className='body-1'>Thanks for creating an account, Joe Snuffy. Now, we need a little more information.</p>
                </div>

            </div>
        </div>
    )
}

export default Form2