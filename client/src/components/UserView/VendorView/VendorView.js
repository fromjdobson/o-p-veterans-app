import React from 'react'
import styled from 'styled-components'

const VendorViewContainer = styled.div`
    border: 1px solid lightcoral;
`

export default function VendorView() {
    return (
        <VendorViewContainer>
            <p>Vendor View</p>
        </VendorViewContainer>
    )
}