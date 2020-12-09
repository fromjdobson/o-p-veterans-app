import React from 'react'
import styled from 'styled-components'
import { Header } from '../../Header'
import { ProgressBar } from '../../ProgressBar'
import { Form } from '../../Form'
import Heading from './Heading'

const RegistrationContainer = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    /* border: 1px solid dodgerblue; */

    & > p {
        margin: 0px;
    }
`

const Container = styled.div`
    box-sizing: border-box;
    padding: 80px 24px 0px 24px;
    width: 100%;
    height: 100%;
    /* background: #D3D3D3; */
`

export default function Registration() {
    return (
        <RegistrationContainer>
            <Header />
            <ProgressBar />
            <Container>
                <Heading heading={'Welcome, Vendor.'} subheading={`Before selecting your booth, let's get some more point of contact information.`}  />
                <Form />
            </Container>
        </RegistrationContainer>
    )
}
