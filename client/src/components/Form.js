import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Form1 from './Form1'
import Form2 from './Form2'
import Form3 from './Form3'
import SponsorshipSelection from './SponsorshipSelection'
import VendorSpace from './VendorSpace'

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

                <Route path='/sponsorshipSelection'>
                    <SponsorshipSelection />
                </Route>

                <Route path='/vendorSpace'>
                    <VendorSpace />
                </Route>

            </Switch>
            {/* <Form2 /> */}
        </div>
    )
}

export default Form