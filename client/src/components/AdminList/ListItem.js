import React from 'react'
import styled from 'styled-components'
import ItemHeader from './ItemHeader'
import ListItemInfo from './ListItemInfo'

const ItemContainer = styled.div`
    box-sizing: border-box;
    width: 100%;
    /* border: 1px solid black; */

    & > .item {
        padding: 0px 8px 0px 8px;
        height: 56px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        /* border: 2px dotted purple; */
    }
`

export default function ListItem(props) {
    const { vendorInfo, isExpandOpen, openExpand } = props
    const { name, boothNumber } = vendorInfo
    
    return (
        <ItemContainer>
            <ItemHeader vendorName={name} boothNumber={boothNumber} openExpand={openExpand} />
            <ListItemInfo isExpandOpen={isExpandOpen} vendorInfo={vendorInfo} />
        </ItemContainer>
    )
}
