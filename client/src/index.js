import React from 'react'
import ReactDOM from 'react-dom'
import UserContext from './providers/UserContext'
import OpVeteranApp from './OpVeteranApp'
import './index.css'

function Index() {

    return (
        <UserContext>
            <OpVeteranApp />
        </UserContext>
    )
}

ReactDOM.render(<Index />, document.getElementById('root'))