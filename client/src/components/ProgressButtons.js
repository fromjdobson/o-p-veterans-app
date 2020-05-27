import React from 'react'

import { ReactComponent as ContinueArrow } from '../images/icons/right-arrow-circle.svg'
import { ReactComponent as PreviousArrow } from '../images/icons/left-arrow-circle.svg'
import'../css/progress-buttons.css'


const ProgressButtons = () => {
    return (
        <div className='progress-buttons-container'>
            <PreviousArrow className='progress-arrow' />
            <ContinueArrow className='progress-arrow' />
        </div>
    )
}

export default ProgressButtons

