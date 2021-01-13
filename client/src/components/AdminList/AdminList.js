import React from 'react'
import styled from 'styled-components'
// import { dummyInfoArr } from './utils'
import ListItem from './ListItem'

const ListContainer = styled.div`
    width: 328px;
    position: relative;
    top: 0px;
    left: calc(50% - 328px/2);
    /* min-height: 312px; */
    border: 2px dashed orange;
`

export default function AdminList(props) {
    const { vendorInfo } = props
    let vendorArr = vendorInfo

    return (
        <ListContainer>
            {vendorArr.map(vendor => {
                const { name } = vendor
                return <ListItem key={name} vendorInfo={vendor} />
            })}
        </ListContainer>
    )
}
