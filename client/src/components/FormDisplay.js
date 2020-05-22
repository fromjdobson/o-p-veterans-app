import React from 'react'

import ProgressBar from './ProgressBar'
import StatusBar from './StatusBar'

import '../css/form-display.css'

const FormDisplay = () => {
    return (
        <div className='form-display-container'>
            <ProgressBar />
            <StatusBar />
        </div>
    )
}

export default FormDisplay
