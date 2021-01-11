import React from 'react'
import styled from 'styled-components'
import ToggleButton from './ToggleButton'

const ToggleContainer = styled.div`
    /* background: lightblue; */
    border: 1px solid black;
`

export default function InfoToggle(props) {
    const { setToggleState } = props

    function handleVendorButton() {
        setToggleState('vendor')
    }

    function handleEventButton() {
        setToggleState('event')
    }

    return (
        <ToggleContainer>
            <ToggleButton name={'vendor-button'} buttonText={'Vendor details'} onClick={() => handleVendorButton()} />
            <ToggleButton name={'event-button'} buttonText={'Event info'} onClick={() => handleEventButton()} />
        </ToggleContainer>
    )
}
