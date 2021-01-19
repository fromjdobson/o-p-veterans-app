import React, {useEffect} from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import AppState from './providers/AppState'
import CurrentUser from './providers/CurrentUser'
// import App from './App'
import BoothMap from './BoothMap/'

import './index.css'

function Index() {
    useEffect(() => {
        console.clear()
    })
    return (
        <AppState>
            <CurrentUser>
                <Router>
                    <BoothMap ADMIN={true} blockPullFromDB={true}
                     onChange={({ state }) => {
                        // console.log('root', state)
                    }}  />
                </Router>
            </CurrentUser>
        </AppState>
    )
}

ReactDOM.render(<Index />, document.getElementById('root'))