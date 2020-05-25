import React from 'react'

import '../css/form-progress.css'
import ProgressCircle from '../images/icons/circle.svg'
import ProgressCircleChecked from '../images/icons/circle-checked.svg'

const FormProgress = () => {
    return (
        <div className='form-progress-container'>
            <img src={ProgressCircleChecked} alt='Default' className='progress-icon' />
            <div className='progress-bar'></div>

            <img src={ProgressCircle} alt='Default' className='progress-icon' />
            <div className='progress-bar'></div>

            <img src={ProgressCircle} alt='Default' className='progress-icon' />
            <div className='progress-bar'></div>

            <img src={ProgressCircle} alt='Default' className='progress-icon' />
            <div className='progress-bar'></div>

            <img src={ProgressCircle} alt='Default' className='progress-icon' />
            <div className='progress-bar'></div>

            <img src={ProgressCircle} alt='Default' className='progress-icon' />
            <div className='progress-bar'></div>

            <img src={ProgressCircle} alt='Default' className='progress-icon' />

        </div>
    )
}

export default FormProgress