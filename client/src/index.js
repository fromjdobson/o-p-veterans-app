import React from 'react'
import ReactDOM from 'react-dom'
import Store from './providers/Store'
import AdminViewContext from './providers/AdminView'
import SponsorshipContext from './providers/SponsorshipContext'
import OpVeteranApp from './OpVeteranApp'
import './index.css'

function Index() {

    return (
        <Store>
            <AdminViewContext>
                <SponsorshipContext>
                     <OpVeteranApp />
                </SponsorshipContext>
            </AdminViewContext>
        </Store>
    )
}

ReactDOM.render(<Index />, document.getElementById('root'))