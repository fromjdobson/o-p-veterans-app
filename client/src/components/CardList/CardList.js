import React from 'react'
import styled from 'styled-components'
import VendorCard from './VendorCard'
import { fakeUserDataBase } from '../../test-users'


const CardListContainer = styled.div`
    width: 100%;
    background: #F6F4EF;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.14), 0px 2px 2px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    /* border: 1px solid blue; */
`

export default function CardList() {
    let list = fakeUserDataBase.map((vendor, idx) => {
        const { companyName, name } = vendor
        return <VendorCard key={idx} company={companyName} userName={name} />
    })
    // console.log(list)
    return (
        <CardListContainer>
            {list}
            {/* <VendorCard  /> */}
        </CardListContainer>
    )
}
