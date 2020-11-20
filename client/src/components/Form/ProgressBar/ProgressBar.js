import React from 'react'
import styled from 'styled-components'

const ProgressBarContainer = styled.div`
    border: 1px solid lightcoral;
`

export default function ProgressBar() {

    return (
        <ProgressBarContainer>
            <p>Progress</p>
        </ProgressBarContainer>
    )
}