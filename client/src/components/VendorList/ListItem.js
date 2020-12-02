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
    const { 
        name,
        email,
        city,
        nonprofit,
        phone,
        sponsorship,
        state,
        streetAddress,
        suiteNumber,
        vendorName,
        veteranOwned,
        zipcode
    } = props
    // console.log(props)
    // console.log(1111, vendorName)

    function setToggleDisplay(status) {
        if (status === 'vendor') {
            return  <VendorDetails
                        name={`${name}`}
                        phone={`${phone}`}
                        email={`${email}`}
                        streetAddress={`${streetAddress}`}
                        suiteNumber={`${suiteNumber}`}
                        city={`${city}`}
                        state={`${state}`}
                        zipcode={`${zipcode}`}
                    />
        } else if (status === 'event') {
            return  <EventInfo
                        nonProfit={`${nonprofit}`}
                        veteranOwned={`${veteranOwned}`}
                        sponsorship={`${sponsorship}`}
                     />
        }
    }

    let displayDetails = setToggleDisplay(toggleState)

    return (
        <ListItemContainer>
            <ItemHeader
                expandContainer={{ state: isExpanded, setter: setIsExpanded }}
                vendorName={`${vendorName}`}
            />
            <RowWrapper display={display}>
                <Toggle toggle={{ toggleState: toggleState, setter: setToggleState }} />
                {displayDetails}
            </RowWrapper>
        </ListItemContainer>
    )
}


