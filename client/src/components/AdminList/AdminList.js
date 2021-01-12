import React from 'react'
import styled from 'styled-components'
import { dummyInfoArr } from './utils'
import ListItem from './ListItem'

const ListContainer = styled.div`
    width: 328px;
    /* min-height: 312px; */
    /* border: 2px dashed orange; */
`

export default function AdminList() {

    function setList(vendorList) {
        return vendorList
    }

    let list = setList(dummyInfoArr)
    console.log(list)

    return (
        <ListContainer>

            {
                dummyInfoArr.map((vendor) => {
                    const { name } = vendor
                    return <ListItem key={name} vendorInfo={vendor} />
                })
            }
            {/* <ListItem
                vendorInfo={dummyInfoArr[0]}
            />

            <ListItem
                vendorInfo={dummyInfoArr[1]}
            /> */}

        </ListContainer>
    )
}
