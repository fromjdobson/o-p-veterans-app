import React from 'react'
import styled from 'styled-components'
import SponsorshipSelector from './SponsorshipSelector'

const VendorViewContainer = styled.div`
    box-sizing: border-box;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    & > h2 {
        margin: 0px 0px 0px 0px;
    }
`

export default function VendorView() {

    return (
        <VendorViewContainer>
            {'VendorView'}
            <SponsorshipSelector />
        </VendorViewContainer>
    )
}