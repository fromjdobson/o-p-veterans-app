import React, { useState } from 'react'
import styled from 'styled-components'
// import { ListItemContext, ToggleContext } from '../../providers/VendorListItemContext'
import ItemHeader from './ItemHeader'
import Toggle from './Toggle'
import VendorDetails from './VendorDetails'
import EventInfo from './EventInfo'

const ListItemContainer = styled.div`
    margin: 0px 0px 8px 0px;
    padding: 8px 16px 8px 16px;
    /* border: 1px solid lightcoral; */
`

const RowWrapper = styled.div`
    margin: 8px 0px 0px 0px;
    display: ${props => props.display};
    /* border: 1px dotted orange; */
`

export default function ListItem() {
    const [isExpanded, setIsExpanded] = useState(false)
    const [toggleState, setToggleState] = useState('vendor')
    const { display } = expandContainer(isExpanded)

    function expandContainer(status) {
        if (status === false) {
            return {
                display: `none`
            }
        } else if (status === true) {
            return {
                display: `block`
            }
        }
    }

    function setToggleDisplay(status) {
        if (status === 'vendor') {
            return <VendorDetails />
        } else if (status === 'event') {
            return <EventInfo />
        }
    }

    let displayDetails = setToggleDisplay(toggleState)

    // console.log(displayDetails)
    
    return (
        <ListItemContainer>
            <ItemHeader expandContainer={{ state: isExpanded, setter: setIsExpanded }} />
            <RowWrapper display={display}>
                <Toggle toggle={{ toggleState: toggleState, setter: setToggleState }} />
                {displayDetails}
                {/* <VendorDetails /> */}
            </RowWrapper>
        </ListItemContainer>
    )
}


