import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import AppState from './providers/AppState'
import CurrentUser from './providers/CurrentUser'
import App from './App'
import './index.css'

function Index() {

    return (
        <AppState>
            <CurrentUser>
                <Router>
                    <App />
                </Router>
            </CurrentUser>
        </AppState>
    )
}

ReactDOM.render(<Index />, document.getElementById('root'))