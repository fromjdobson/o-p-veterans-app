import React from 'react'
import styled from 'styled-components'
import Playground from './Playground'

const UserViewContainer = styled.div`
    /* border: 1px solid dodgerblue; */
`

export default function UserView() {
    return (
        <UserViewContainer>
            <Playground />
        </UserViewContainer>
    )
}