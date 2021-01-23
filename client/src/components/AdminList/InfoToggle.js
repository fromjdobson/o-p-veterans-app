import React from 'react'
import styled from 'styled-components'
import ToggleButton from './ToggleButton'
import { 
    newToggleObj ,
    assignToggleStatus,
    handleVendorButton,
    handleEventButton
} from './utils'

const ToggleContainer = styled.div`
    /* border: 1px solid black; */
`

export default function InfoToggle(props) {
    const { toggleState, setToggleState } = props
    let toggleStatusObj = assignToggleStatus(newToggleObj(toggleState))
    const { toggleOne, toggleTwo } = toggleStatusObj

    return (
        <ToggleContainer>
            <ToggleButton toggleStyle={toggleOne} name={'vendor-button'} buttonText={'Vendor details'} onClick={() => handleVendorButton(setToggleState)} />
            <ToggleButton toggleStyle={toggleTwo} name={'event-button'} buttonText={'Event info'} onClick={() => handleEventButton(setToggleState)} />
        </ToggleContainer>
    )
}
