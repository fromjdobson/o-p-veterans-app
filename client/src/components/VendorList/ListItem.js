import React, { useContext } from 'react'
import styled from 'styled-components'
import { ListItemContext, ToggleContext } from '../../providers/VendorListItemContext'
import { setDisplay } from '../VendorListItem/utils'
import ItemHeader from './ItemHeader'
import Toggle from './Toggle'
import VendorDetails from './VendorDetails'
import EventInfo from './EventInfo'

const ListItemContainer = styled.div`
    padding: 8px 16px 8px 16px;
    border: 1px solid lightcoral;
`

const RowWrapper = styled.div`
    margin: 8px 0px 0px 0px;
    display: ${props => props.display};
    /* border: 1px dotted orange; */
`

export default function ListItem() {
    const [isExpanded] = useContext(ListItemContext)
    const [toggleState] = useContext(ToggleContext)
    const { display } = expandDisplay(isExpanded)

    function setDetails(status) {
        if (status === 'vendor') {
            return <VendorDetails />
        } else if (status === 'event') {
            return <EventInfo />
        }
    }
    let displayDetails = setDetails(toggleState)

    console.log(displayDetails)

    function expandDisplay(status) {
        if (status === false) {
            return { display: `none` }
        } else if (status === true) {
            return { display: `block` }
        }
    }
    
    return (
        <ListItemContainer>
            <ItemHeader />
            <RowWrapper display={display}>
                <Toggle />
                {displayDetails}
                {/* <VendorDetails /> */}
            </RowWrapper>
        </ListItemContainer>
    )
}


