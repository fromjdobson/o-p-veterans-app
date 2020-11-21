import React from 'react'
import styled from 'styled-components'
import { Header } from '../../Header'
import { ProgressBar } from '../../ProgressBar'
import { Form } from '../../Form'
import Heading from './Heading'

const VendorViewContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid lightcoral;

    & > h2 {
        margin: 0px 0px 0px 0px;
    }
`

export default function VendorView() {
    return (
        <VendorViewContainer>
            <Header />
            <ProgressBar />
            <Heading heading={'Welcome, Vendor.'} subheading={`Before selecting your booth, let's get some more point of contact information.`}  />
            <Form />
        </VendorViewContainer>
    )
}