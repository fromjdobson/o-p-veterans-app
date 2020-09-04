import React from 'react'
import styled from 'styled-components'
import VendorCard from './VendorCard'
import { fakeUserDataBase } from '../../test-users'

const CardListContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 16px;
`

export default function CardList() {
    let list = fakeUserDataBase.map((vendor, idx) => {
        const { companyName, name, description } = vendor
        return <VendorCard key={idx} company={companyName} userName={name} vendorDesc={description} />
    })

    return (
        <CardListContainer>
            {list}
        </CardListContainer>
    )
}
