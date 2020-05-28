import React from 'react'

// import PaymentReview from './PaymentReview'
import SponsorGrid from './SponsorGrid'

import '../css/sponsorship-display.css'

const SponsorshipDisplay = () => {
    return (
        <div className='sponsorship-display-container'>
            <SponsorGrid />
            {/* <PaymentReview /> */}
        </div>
    )
}

export default SponsorshipDisplay