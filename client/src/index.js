import React from 'react'
import ReactDOM from 'react-dom'
import AppContext from './providers/AppContext'
import UserContext from './providers/UserContext'
import OpVeteranApp from './OpVeteranApp'
import './index.css'

function Index() {

    return (
        <AppContext>
            <UserContext>
                <OpVeteranApp />
            </UserContext>
        </AppContext>
    )
}

ReactDOM.render(<Index />, document.getElementById('root'))