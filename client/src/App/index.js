import React from 'react'
import { Switch, Route } from 'react-router'
import Style from './styles'
import Login from '../Login/'

export default function App (){
    return <Style>
        <Switch>
            <Route path='/Vendor'>Vendor</Route>
            <Route path='/Admin'>Admin</Route>
            <Route path='/'>{ Login }</Route>
        </Switch>
    </Style>
}