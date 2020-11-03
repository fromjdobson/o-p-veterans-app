import React from 'react'
import styled from 'styled-components'

import { AdminSearchBar } from '../AdminSearchBar'
import { VendorListItem } from '../VendorListItem'

const PlaygroundContainer = styled.div`
    /* border: 2px solid green; */
`

export default function Playground() {
    return (
        <PlaygroundContainer>
            <AdminSearchBar />
            <VendorListItem />
        </PlaygroundContainer>
    )
}