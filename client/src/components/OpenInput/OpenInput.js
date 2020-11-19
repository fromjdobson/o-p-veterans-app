import React from 'react'
import styled from 'styled-components'
import WarningIcon from './WarningIcon'

const OpenInputContainer = styled.div`
    border: 1px solid lightcoral;
`

export default function OpenInput() {
    return (
        <OpenInputContainer>
            <WarningIcon status={'none'} />
        </OpenInputContainer>
    )
}