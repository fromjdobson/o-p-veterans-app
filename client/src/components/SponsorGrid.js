import React from 'react'

import LogoComponent from './LogoComponent'

import '../css/sponsor-grid.css'

const SponsorGrid = () => {
    return (
        <div className='sponsor-grid-container'>
            <div className='logo-grid-container'>
                <LogoComponent />
                <LogoComponent />
                <LogoComponent />
                <LogoComponent />
                <LogoComponent />
                <LogoComponent />
            </div>
        </div>
    )
}

export default SponsorGrid