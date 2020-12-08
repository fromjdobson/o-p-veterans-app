import React, { useContext } from 'react'
import styled from 'styled-components'
import { CurrentUserContext } from '../../../providers/CurrentUser'
import TempDashboard from './TempDashboard'
import TempRegistration from './TempRegistration'

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
    const [currentUser] = useContext(CurrentUserContext)
    console.log(currentUser)
    const { formcomplete } = currentUser

    return (
        <VendorViewContainer>
            {formcomplete === false ? <TempRegistration /> : <TempDashboard />}
        </VendorViewContainer>
    )
}