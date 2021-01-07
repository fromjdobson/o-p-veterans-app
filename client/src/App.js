import React from 'react'
import styled from 'styled-components'
import { Switch, Route } from 'react-router-dom'
// import Playground from './components/UserView/Playground'
import { Landing } from './pages/index'
import { Admin } from './pages/index'
import { Vendor } from './pages/index'


const AppContainer = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 100vh;
    border: 2px dashed lightblue;
`

export default function OpVeteranApp() {

    return (
        <AppContainer>
            {/* <Playground /> */}
            <Switch>
                <Route exact path='/'>
                    <Landing />
                </Route>
                <Route path='/admin'>
                    <Admin />
                </Route>
                <Route path='/vendor'>
                    <Vendor />
                </Route>
            </Switch>
            <Landing />
        </AppContainer>
    )
}