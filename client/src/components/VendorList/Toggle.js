import React from 'react'
import styled from 'styled-components'
import ToggleButton from './ToggleButton'

const ToggleContainer = styled.div`
    display: flex;
`

export default function Toggle(props) {
    const { toggle } = props
    let toggleObj = {...toggle}

    return (
        <ToggleContainer>
            <ToggleButton buttonText={'Vendor details'} buttonStatus={'active'} toggleObj={toggleObj} />
            <ToggleButton buttonText={'Event info'} buttonStatus={'inactive'} toggleObj={toggleObj} />
        </ToggleContainer>
    )
}