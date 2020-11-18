import React, { useContext } from 'react'
import styled from 'styled-components'
import { ListItemContext } from '../../providers/VendorListItemContext'
import ItemHeader from './ItemHeader'
import Toggle from './Toggle'
import VendorDetails from './VendorDetails'
// import EventInfo from './EventInfo'

const ListItemContainer = styled.div`
    /* border: 1px solid lightcoral; */
`

const RowWrapper = styled.div`
    display: ${props => props.display};
    /* border: 1px dotted orange; */
`

export default function ListItem() {
    const [isExpanded] = useContext(ListItemContext)
    const { display } = openDisplay(isExpanded)

    function openDisplay(status) {
        if (status === false) {
            return { display: `none` }
        } else if (status === true) {
            return { display: `block` }
        }
    }
    console.log(openDisplay(isExpanded))
    
    return (
        <ListItemContainer>
            <ItemHeader />
            <RowWrapper display={display}>
                <Toggle />
                <VendorDetails />
            </RowWrapper>
        </ListItemContainer>
    )
}


