import React, { useState } from 'react'
import styled from 'styled-components'
import { expandContainer } from './utils'
import ItemHeader from './ItemHeader'
import Toggle from './Toggle'
import VendorDetails from './VendorDetails'
import EventInfo from './EventInfo'

const ListItemContainer = styled.div`
    margin: 0px 0px 0px 0px;
    padding: 8px 16px 8px 16px;
`

const RowWrapper = styled.div`
    margin: 8px 0px 0px 0px;
    display: ${props => props.display};
`

export default function ListItem(props) {
    const [isExpanded, setIsExpanded] = useState(false)
    const [toggleState, setToggleState] = useState('vendor')
    const { display } = expandContainer(isExpanded)

    function setToggleDisplay(status) {
        if (status === 'vendor') {
            return <VendorDetails />
        } else if (status === 'event') {
            return <EventInfo />
        }
    }

    let displayDetails = setToggleDisplay(toggleState)

    return (
        <ListItemContainer>
            <ItemHeader expandContainer={{ state: isExpanded, setter: setIsExpanded }} />
            <RowWrapper display={display}>
                <Toggle toggle={{ toggleState: toggleState, setter: setToggleState }} />
                {displayDetails}
            </RowWrapper>
        </ListItemContainer>
    )
}


