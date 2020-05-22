import React from 'react'

// import ProgressBar from './ProgressBar'
// import StatusBar from './StatusBar'
import Form1 from './Form1'

import '../css/form-display.css'


const FormDisplay = () => {
    return (
        <div className='form-display-container'>
        <div className='close-container'>
            <p className='body-1'>Back to O.P. Veteran</p>
            <div className='close'></div>
        </div>
            <Form1 />
        </div>


    )
}

export default FormDisplay
