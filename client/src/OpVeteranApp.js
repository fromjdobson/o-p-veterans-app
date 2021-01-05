import React from 'react'
import styled from 'styled-components'
import { Header } from './components/Header'
import { Landing } from './pages/Landing'
// import { Login } from './components/UserView/Login'
// import { AdminView } from './components/UserView/AdminView'
// import { VendorView } from './components/UserView/VendorView'


const AppContainer = styled.div`
    /* border: 1px solid lightcoral; */
`

export default function OpVeteranApp() {

    return (
        <AppContainer>
            <Header />
            {/* <Login /> */}
            {/* <AdminView /> */}
            <Landing />
        </AppContainer>
    )
}