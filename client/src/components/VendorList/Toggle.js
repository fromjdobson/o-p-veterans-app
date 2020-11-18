import React from 'react'
import styled from 'styled-components'
// import { ToggleContext } from '../../providers/VendorListItemContext'
import ToggleButton from './ToggleButton'

const ToggleContainer = styled.div`
    display: flex;
    /* border: 1px dashed dodgerblue; */
`

export default function Toggle() {
    // const [toggleState] = useContext(ToggleContext)

    return (
        <ToggleContainer>
            <ToggleButton buttonText={'Vendor details'} buttonStatus={'active'} />
            <ToggleButton buttonText={'Event info'} buttonStatus={'inactive'} />
        </ToggleContainer>
    )
}