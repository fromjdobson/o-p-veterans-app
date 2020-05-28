import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Form1 from './Form1'
import Form2 from './Form2'
import Form3 from './Form3'
import Form4 from './Form4'
import Form5 from './Form5'

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

                <Route path='/form3'>
                    <Form3 />
                </Route>

                <Route path='/form4'>
                    <Form4 />
                </Route>

                <Route path='/form5'>
                    <Form5 />
                </Route>

            </Switch>
            {/* <Form2 /> */}
        </div>
    )
}

export default Form