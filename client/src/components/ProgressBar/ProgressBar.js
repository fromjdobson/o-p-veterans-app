import React from 'react'
import styled from 'styled-components'
import { ProgressSection } from './ProgressSection'

const ProgressBarContainer = styled.div`
    width: 100%;
    display: flex;
`

export default function ProgressBar() {

    return (
        <ProgressBarContainer>
            <ProgressSection title={'Vendor details'} status={'active'} />
            <ProgressSection title={'Event info'} status={'active'} />
        </ProgressBarContainer>
    )
}