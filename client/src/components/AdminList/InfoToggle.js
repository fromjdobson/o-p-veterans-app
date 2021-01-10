import React from 'react'
import styled from 'styled-components'
import { setButtonStyle } from '../Button/utils'
import ToggleButton from './ToggleButton'

const ToggleContainer = styled.div`
    /* background: lightblue; */
    border: 1px solid black;
`

export default function InfoToggle(props) {
    const { toggleState, setToggleState } = props

    console.log(toggleState, setToggleState)

    function handleVendorButton() {
        alert('fired')
    }

    return (
        <ToggleContainer>
            <ToggleButton buttonText={'Vendor details'} onClick={() => handleVendorButton()} />
            <ToggleButton buttonText={'Event info'} />
        </ToggleContainer>
    )
}
