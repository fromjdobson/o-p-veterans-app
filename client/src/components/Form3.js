import React from 'react'


import ProgressBar from './ProgressBar'
import StatusBar from './StatusBar'

import '../css/form3.css'

const Form3 = () => {
    return (
        <div className='form3-container'>
            <div className='status-container'>
                <ProgressBar />
                <StatusBar />
            </div>
            <div className='container'>
                <div className='headline-container'>
                    {/* <h1>Create an account</h1> */}
                    <p className='body-1'>Form 3</p>
                </div>
            </div>
        </div>
    )
}

export default Form3