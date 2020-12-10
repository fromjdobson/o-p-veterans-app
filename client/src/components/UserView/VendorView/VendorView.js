import React from 'react'
import styled from 'styled-components'
// import { CurrentUserContext } from '../../../providers/CurrentUser'
import SponsorshipSelector from './SponsorshipSelector'
// import Registration from './Registration'

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
    // const [currentUser] = useContext(CurrentUserContext)
    // const { formcomplete } = currentUser

    return (
        <VendorViewContainer>
            <SponsorshipSelector />
            {/* {formcomplete === false ? <Registration /> : <SponsorshipSelector />} */}
        </VendorViewContainer>
    )
}