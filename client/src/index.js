import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from './App'
import Testing from './Testing'

import './index.css'

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            
            <Route path='/testing*'><Testing/></Route>
            <Route path='/'><App /></Route>

        </Switch>
    </BrowserRouter>, document.getElementById('root'))