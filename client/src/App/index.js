import React from 'react'
import { Switch, Route } from 'react-router'
import Style from './styles'
import Login from '../Login/'
import UserLanding from '../UserLanding/'

export default function App (){
    return <Style>
        <Switch>
            <Route path='/user'><UserLanding/></Route>
            <Route path='/'><Login/></Route>
        </Switch>
    </Style>
}