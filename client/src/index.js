import React from 'react'
import ReactDOM from 'react-dom'
import CurrentUser from './providers/CurrentUser'
import FormContext from './providers/FormContext'
import OpVeteranApp from './OpVeteranApp'
import './index.css'

function Index() {

    return (
        <CurrentUser>
            <FormContext>
                <OpVeteranApp />
            </FormContext>
        </CurrentUser>
    )
}

ReactDOM.render(<Index />, document.getElementById('root'))