import React from 'react'
import { Switch, Route } from 'react-router'

export default function UserLanding(){
    return <Switch>
        <Route path='/Vendor'>Vendor</Route>
        <Route path='/Admin'>Admin</Route>
    </Switch>
}
