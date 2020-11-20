import React from 'react'
import styled from 'styled-components'
import { ProgressSection } from './ProgressSection'

const ProgressBarContainer = styled.div`
    border: 1px solid lightcoral;
`

export default function ProgressBar() {

    return (
        <ProgressBarContainer>
            <ProgressSection />
        </ProgressBarContainer>
    )
}