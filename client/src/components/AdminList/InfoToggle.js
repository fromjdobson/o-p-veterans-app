import React from 'react'
import styled from 'styled-components'
import ToggleButton from './ToggleButton'

const ToggleContainer = styled.div`
    /* background: lightblue; */
    border: 1px solid black;
`

export default function InfoToggle() {

    return (
        <ToggleContainer>
            <ToggleButton buttonText={'Vendor details'} />
            <ToggleButton buttonText={'Event info'} />
        </ToggleContainer>
    )
}
