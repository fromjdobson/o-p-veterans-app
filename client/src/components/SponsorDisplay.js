import React from 'react'

import SponsorLogo from './SponsorLogo'
import '../css/sponsor-display.css'

const SponsorDisplay = () => {
    return (
        <div className='sponsor-display-container'>
            <div className='logos-container'>
                <SponsorLogo />
                <SponsorLogo />
                <SponsorLogo />
            </div>

            <div className='logos-container'>
                <SponsorLogo />
                <SponsorLogo />
                <SponsorLogo />
            </div>

            <div className='logos-container'>
                <SponsorLogo />
                <SponsorLogo />
                <SponsorLogo />
            </div>

            <h4 className='sponsor-level-label'>Paladin Level Sponsors</h4>
        </div>
    )
}

export default SponsorDisplay