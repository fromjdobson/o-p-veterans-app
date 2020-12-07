import React from 'react'
import styled from 'styled-components'
import { Header } from '../../Header'
import { ProgressBar } from '../../ProgressBar'
import { Form } from '../../Form'
import Heading from './Heading'

const RegistrationContainer = styled.div`
    box-sizing: border-box;
    width: 100%;
    /* border: 1px solid dodgerblue; */

    & > p {
        margin: 0px;
    }
`

export default function TempRegistration() {
    return (
        <RegistrationContainer>
            <Header />
            <ProgressBar />
            <Heading heading={'Welcome, Vendor.'} subheading={`Before selecting your booth, let's get some more point of contact information.`}  />
            <Form />
        </RegistrationContainer>
    )
}
