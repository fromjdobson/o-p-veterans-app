import React from 'react'
import ReactDOM from 'react-dom'
import AppState from './providers/AppState'
import AdminViewContext from './providers/AdminView'
import SponsorshipContext from './providers/SponsorshipContext'
import OpVeteranApp from './OpVeteranApp'
import './index.css'

function Index() {

    return (
        <AppState>
            <AdminViewContext>
                <SponsorshipContext>
                     <OpVeteranApp />
                </SponsorshipContext>
            </AdminViewContext>
        </AppState>
    )
}

ReactDOM.render(<Index />, document.getElementById('root'))