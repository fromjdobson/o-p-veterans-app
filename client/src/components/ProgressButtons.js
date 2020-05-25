import React from 'react'

import '../css/progress-buttons.css'
import ContinueButton from '../images/icons/right-arrow-circle.svg'
import PreviousButton from '../images/icons/left-arrow-circle.svg'

const ProgressButtons = () => {
    return (
        <div className='progress-buttons-container'>
            <img src={PreviousButton} alt='Previous' className='prev' />
            <img src={ContinueButton} alt='Continue' className='cont' />
        </div>
    )
}

export default ProgressButtons