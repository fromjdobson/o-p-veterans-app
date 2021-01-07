import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import CurrentUser from './providers/CurrentUser'
import App from './App'
import './index.css'

function Index() {

    return (
        <CurrentUser>
            <Router>
                <App />
            </Router>
        </CurrentUser>
    )
}

ReactDOM.render(<Index />, document.getElementById('root'))