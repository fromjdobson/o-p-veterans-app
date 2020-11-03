import React from 'react'
import styled from 'styled-components'

const VendorListItemContainer = styled.div`
    border: 1px solid lightcoral;
`

export default function VendorListItem() {
    return (
        <VendorListItemContainer>
            <p>Vendor List Item</p>
        </VendorListItemContainer>
    )
}