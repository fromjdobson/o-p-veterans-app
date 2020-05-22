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
                <h3>to sponsor Vet Fest or register for a vendor booth.</h3>
            </div>
        </div>
    )
}

export default FormDisplay
