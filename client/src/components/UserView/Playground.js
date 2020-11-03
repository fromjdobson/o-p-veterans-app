import React from 'react'
import styled from 'styled-components'

import { AdminSearchBar } from '../AdminSearchBar'

const PlaygroundContainer = styled.div`
    /* border: 2px solid green; */
`

export default function Playground() {
    return (
        <PlaygroundContainer>
            <AdminSearchBar />
        </PlaygroundContainer>
    )
}