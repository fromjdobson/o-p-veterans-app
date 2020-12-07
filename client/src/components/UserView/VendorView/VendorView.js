import React, { useContext } from 'react'
import styled from 'styled-components'
import { CurrentUserContext } from '../../../providers/CurrentUser'
import TempDashboard from './TempDashboard'
import TempRegistration from './TempRegistration'
// import { Header } from '../../Header'
// import { ProgressBar } from '../../ProgressBar'
// import { Form } from '../../Form'
// import Heading from './Heading'

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

// const Container = styled.div`
//     box-sizing: border-box;
//     width: 100%;
//     height: 100%;
//     padding: 0px 24px 0px 24px;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;

//     @media (min-width: 768px) {
//         width: 640px;
//     }
// `

export default function VendorView() {
    const [currentUser] = useContext(CurrentUserContext)
    const { formcomplete } = currentUser
    // let isComplete = currentUser.formcomplete
    // console.log(formcomplete)

    return (
        <VendorViewContainer>
            {formcomplete === false ? <TempRegistration /> : <TempDashboard />}
            {/* <Header />
            <ProgressBar /> */}
            {/* <Container>
                <Heading heading={'Welcome, Vendor.'} subheading={`Before selecting your booth, let's get some more point of contact information.`}  />
                <Form />
            </Container> */}
        </VendorViewContainer>
    )
}