import React from 'react'
import ReactDOM from 'react-dom'
import AppState from './providers/AppState'
import AdminViewContext from './providers/AdminView'
import BoothContext from './providers/BoothContext'
import SponsorshipContext from './providers/SponsorshipContext'
import OpVeteranApp from './OpVeteranApp'
import './index.css'

function Index() {

    return (
        <AppState>
            <BoothContext>
            <AdminViewContext>
                <SponsorshipContext>
                     <OpVeteranApp />
                </SponsorshipContext>
            </AdminViewContext>
            </BoothContext>
        </AppState>
    )
}

ReactDOM.render(<Index />, document.getElementById('root'))