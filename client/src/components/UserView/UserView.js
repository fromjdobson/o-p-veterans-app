import React from 'react'
import styled from 'styled-components'
import { Login } from './Login'
// import Playground from './Playground'

const UserViewContainer = styled.div`
    /* border: 1px solid dodgerblue; */
`

export default function UserView() {
    return (
        <UserViewContainer>
            {/* <Playground /> */}
            <Login />
        </UserViewContainer>
    )
}