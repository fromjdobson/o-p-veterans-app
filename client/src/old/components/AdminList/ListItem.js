import React, { useState } from 'react'
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
    const [toggleState, setToggleState] = useState('vendor')
    const [isExpanded, setIsExpanded] = useState(false)
    const { vendorInfo } = props
    const { name, boothNumber } = vendorInfo
    
    return (
        <ItemContainer>
            <ItemHeader 
                vendorName={name} 
                boothNumber={boothNumber} 
                isExpanded={isExpanded}
                setIsExpanded={setIsExpanded}
            />
            <ListItemInfo 
                vendorInfo={vendorInfo}
                isExpanded={isExpanded}
                toggleState={toggleState}
                setToggleState={setToggleState}
            />
        </ItemContainer>
    )
}
