import React from 'react'
import ReactDOM from 'react-dom'
import Store from './providers/Store'
import SponsorshipContext from './providers/SponsorshipContext'
import OpVeteranApp from './OpVeteranApp'

import './index.css'

function Index() {
    return (
        <Store>
            <SponsorshipContext>
                <OpVeteranApp />
            </SponsorshipContext>
        </Store>
    )
}

ReactDOM.render(<Index />, document.getElementById('root'))