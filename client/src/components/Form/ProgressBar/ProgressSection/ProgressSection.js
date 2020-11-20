import React from 'react'
import styled from 'styled-components'
import ProgressIndicatorIcon from './ProgressIndicatorIcon'

const ProgressSectionContainer = styled.div`
    border: 1px solid blue;
`

export default function ProgressSection() {
    return (
        <ProgressSectionContainer>
            <ProgressIndicatorIcon status={'active'} />
            <ProgressIndicatorIcon status={'inactive'} />
            <ProgressIndicatorIcon status={'inactive'} />
            <ProgressIndicatorIcon status={'inactive'} />
            <ProgressIndicatorIcon status={'inactive'} />
            <ProgressIndicatorIcon status={'inactive'} />
        </ProgressSectionContainer>
    )
}