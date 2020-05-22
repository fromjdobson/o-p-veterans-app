import React from 'react'

import '../css/progress-bar.css'
import inactive from '../images/icons/circle.svg'

const ProgressBar = () => {
    return (
        <div className='progress-bar-container'>
            <img src={inactive} alt='Inactive' className='statusIcon' />
            <div className='bar'></div>

            <img src={inactive} alt='Inactive' className='statusIcon' />
            <div className='bar'></div>

            <img src={inactive} alt='Inactive' className='statusIcon' />
            <div className='bar'></div>

            <img src={inactive} alt='Inactive' className='statusIcon' />
            <div className='bar'></div>

            <img src={inactive} alt='Inactive' className='statusIcon' />
            <div className='bar'></div>

            <img src={inactive} alt='Inactive' className='statusIcon' />
            <div className='bar'></div>

            <img src={inactive} alt='Inactive' className='statusIcon' />

        </div>
    )
}

export default ProgressBar