import React from 'react'
import styled from 'styled-components'
import { dummyInfoArr } from './utils'
import ListItem from './ListItem'

const ListContainer = styled.div`
    width: 328px;
    max-height: 312px;
    border: 2px dashed orange;
`

export default function AdminList() {

    return (
        <ListContainer>
            <ListItem
                vendorInfo={dummyInfoArr[0]}
            />

            <ListItem
                vendorInfo={dummyInfoArr[1]}
            />

        </ListContainer>
    )
}
