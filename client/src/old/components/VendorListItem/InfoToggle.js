import React from 'react'
import styled from 'styled-components'
import Toggle from './Toggle'

const InfoToggleContainer = styled.div`
    display: flex;
    /* border: 2px solid red; */
`

export default function InfoToggle() {
    return (
        <InfoToggleContainer>
            <Toggle status={'active'} text={'Vendor details'} />
            <Toggle status={'inactive'} text={'Event info'} />
        </InfoToggleContainer>
    )
}