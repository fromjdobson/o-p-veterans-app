import React from 'react'
import styled from 'styled-components'
import ToggleButton from './ToggleButton'

const ToggleContainer = styled.div`
    /* background: lightblue; */
    /* border: 1px solid black; */
`

export default function InfoToggle(props) {
    const { toggleClick } = props

    return (
        <ToggleContainer>
            <ToggleButton isOn={true} buttonText={'Vendor details'} toggleClick={toggleClick} />
            <ToggleButton isOn={false} buttonText={'Event info'} toggleClick={toggleClick} />
        </ToggleContainer>
    )
}
