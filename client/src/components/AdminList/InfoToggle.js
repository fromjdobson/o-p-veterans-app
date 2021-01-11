import React from 'react'
import styled from 'styled-components'
import ToggleButton from './ToggleButton'

const ToggleContainer = styled.div`
    /* background: lightblue; */
    border: 1px solid black;
`

export default function InfoToggle() {

    function handleVendorButton(e) {
        const { target } = e
        console.log(target.name)

    }

    function handleEventButton(e) {
        const { target } = e
        console.log(target.name)
    }

    return (
        <ToggleContainer>
            <ToggleButton name={'vendor-button'} buttonText={'Vendor details'} onClick={(e) => handleVendorButton(e)} />
            <ToggleButton name={'event-button'} buttonText={'Event info'} onClick={(e) => handleEventButton(e)} />
        </ToggleContainer>
    )
}
