import React, { useContext } from 'react'
import styled from 'styled-components'
import { AppStateContext } from '../../providers/AppState'
import ToggleButton from './ToggleButton'

const ToggleContainer = styled.div`
    /* background: lightblue; */
    border: 1px solid black;
`

export default function InfoToggle() {
    const { toggle } = useContext(AppStateContext)
    const [ selectedToggle, setSelectedToggle] = toggle

    function handleVendorButton() {
        setSelectedToggle('vendor')
    }

    function handleEventButton() {
        setSelectedToggle('event')
    }

    return (
        <ToggleContainer>
            <ToggleButton name={'vendor-button'} buttonText={'Vendor details'} onClick={() => handleVendorButton()} />
            <ToggleButton name={'event-button'} buttonText={'Event info'} onClick={() => handleEventButton()} />
        </ToggleContainer>
    )
}
