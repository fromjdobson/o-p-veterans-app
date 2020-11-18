import React from 'react'
import ReactDOM from 'react-dom'
import Store from './providers/Store'
import SponsorshipContext from './providers/SponsorshipContext'
import VendorListItemContext from './providers/VendorListItemContext'
import OpVeteranApp from './OpVeteranApp'
import './index.css'

function Index() {
    return (
        <Store>
            <SponsorshipContext>
                <VendorListItemContext>
                    <OpVeteranApp />
                </VendorListItemContext>
            </SponsorshipContext>
        </Store>
    )
}

ReactDOM.render(<Index />, document.getElementById('root'))