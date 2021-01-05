import React from 'react'
import ReactDOM from 'react-dom'
import CurrentUser from './providers/CurrentUser'
import OpVeteranApp from './OpVeteranApp'
import './index.css'

function Index() {

    return (
        <CurrentUser>
            <OpVeteranApp />
        </CurrentUser>
    )
}

ReactDOM.render(<Index />, document.getElementById('root'))