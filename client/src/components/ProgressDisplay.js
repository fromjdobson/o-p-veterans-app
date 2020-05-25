import React from 'react'

import '../css/progress-display.css'

import FormProgress from './FormProgress'
import ProcessingStatus from './ProcessingStatus'

const ProgressDisplay = () => {
    return (
        <div className='progress-display-container'>
            <FormProgress />
            <ProcessingStatus />
        </div>
    )
}

export default ProgressDisplay