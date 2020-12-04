import React from 'react'
import ReactDOM from 'react-dom'
import CurrentUser from './providers/CurrentUser'
import OpVeteranApp from './OpVeteranApp'
import './index.css'
import BoothContext from './providers/BoothContext'

function Index() {

    return (
        <CurrentUser>
            <BoothContext>
            <OpVeteranApp />
            </BoothContext>
        </CurrentUser>
    )
}

ReactDOM.render(<Index />, document.getElementById('root'))