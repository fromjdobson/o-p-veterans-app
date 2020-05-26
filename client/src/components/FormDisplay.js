import React from 'react'

import '../css/form-display.css'

import ProgressDisplay from './ProgressDisplay'
import Form from './Form'

const FormDisplay = () => {
    return (
        <div className='form-display-container'>
            <ProgressDisplay />
            <Form />
        </div>
    )
}

export default FormDisplay