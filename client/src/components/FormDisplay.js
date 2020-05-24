import React from 'react'
import { Switch, Route } from 'react-router-dom'

// import ProgressBar from './ProgressBar'
// import StatusBar from './StatusBar'

import Form1 from './Form1'

import '../css/form-display.css'
import Form2 from './Form2'


const FormDisplay = () => {
    return (
        <div className='form-display-container'>
            <div className='close-container'>
                <p className='body-1'>Back to O.P. Veteran</p>
                <div className='close'></div>
            </div>
            <Switch>
                <Route path='/form1'>
                    <Form1 />
                </Route>

                <Route path='/form2'>
                    <Form2 />
                </Route>
            </Switch>
        </div>


    )
}

export default FormDisplay
