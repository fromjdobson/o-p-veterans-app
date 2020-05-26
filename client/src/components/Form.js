import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Form1 from './Form1'
import Form2 from './Form2'

import '../css/form.css'

const Form = () => {
    return (
        <div className='form-container'>
            <Switch>
                <Route exact path="/form1">
                    <Form1 />
                </Route>
                <Route path="/form2">
                    <Form2 />
                </Route>
            </Switch>
            {/* <Form2 /> */}
        </div>
    )
}

export default Form