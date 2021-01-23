import React from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import styled from 'styled-components'
import BoothMap from '../BoothMap/'

let NavBar = styled.nav`
    margin: 10px;
    padding: 18px;
    background: #f8aeae;
    & > * {
        border: 1px solid transparent;
        padding: 12px;
    }
    & > *:hover{
        border: 1px solid red;
    }
`

export default (p) => {
    return <Switch>
        <Route path='/testing/boothmap/vendor'><BoothMap/></Route>
        <Route path='/testing/boothmap/admin'><BoothMap ADMIN/></Route>
        <Route path='/'>
            <h1>This is where we can try out our new components before plugging them into the main App</h1>
            <NavBar>
                <Link to='/testing/boothmap/vendor'>Vendor Booth Selection</Link>
                <Link to='/testing/boothmap/admin'>Admin Booth Management</Link>
            </NavBar>
        </Route>


    </Switch>
}