import React from 'react'
import styled from 'styled-components'
import ListItem from './ListItem'
import atpLogo from '../../assets/images/atp-logo.png'

const ListContainer = styled.div`
    width: 328px;
    height: 296px;
    border: 2px dashed orange;
`

export default function AdminList() {
    const dummyInfo = {
        name: 'Bunty Soap Company',
        logo: atpLogo,
        boothNumber: 'A01',
        userName: 'Frank Galikanokus',
        phone: '512-555-1212',
        email: 'f.galikanokus@bunty.com',
        streetAddress: '1234 Main St',
        aptSuite: 'Suite #500',
        city: 'Leander',
        state: 'TX',
        zipcode: '78611'
    }

    const { logo, name, boothNumber } = dummyInfo

    return (
        <ListContainer>
            <ListItem logo={logo} vendorname={name} boothNumber={boothNumber} />
        </ListContainer>
    )
}
