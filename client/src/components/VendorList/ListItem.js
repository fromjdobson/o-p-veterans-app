import React from 'react'
import styled from 'styled-components'
import ItemHeader from './ItemHeader'
import Toggle from './Toggle'
import VendorDetails from './VendorDetails'
// import EventInfo from './EventInfo'

const ListItemContainer = styled.div`
    /* border: 1px solid lightcoral; */
`

const RowWrapper = styled.div`
    /* border: 1px dotted orange; */
`

export default function ListItem() {
    return (
        <ListItemContainer>
            <ItemHeader />
            <RowWrapper>
                <Toggle />
            </RowWrapper>
            <VendorDetails />
        </ListItemContainer>
    )
}


