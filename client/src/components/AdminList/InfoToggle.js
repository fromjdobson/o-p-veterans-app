import React from 'react'
import styled from 'styled-components'
import ToggleButton from './ToggleButton'

const ToggleContainer = styled.div`
    /* background: lightblue; */
    /* border: 1px solid black; */
`

export default function InfoToggle(props) {
    const { toggleState, setToggleState } = props

    function newToggleObj(status) {
        if (status === 'vendor') {
            return { vendorToggle: 'active', eventToggle: 'inactive' }
        } else if (status === 'event') {
            return { vendorToggle: 'inactive', eventToggle: 'active' }
        }
    }

    function assignToggleStatus(toggleObj) {
        const { vendorToggle, eventToggle } = toggleObj
        const tempObj = { toggleOne: vendorToggle, toggleTwo: eventToggle }

        return tempObj
    }

    let toggleStatusObj = assignToggleStatus(newToggleObj(toggleState))
    const { toggleOne, toggleTwo } = toggleStatusObj

    function handleVendorButton() {
        setToggleState('vendor')
    }

    function handleEventButton() {
        setToggleState('event')
    }

    return (
        <ToggleContainer>
            <ToggleButton toggleStyle={toggleOne} name={'vendor-button'} buttonText={'Vendor details'} onClick={() => handleVendorButton()} />
            <ToggleButton toggleStyle={toggleTwo} name={'event-button'} buttonText={'Event info'} onClick={() => handleEventButton()} />
        </ToggleContainer>
    )
}
