import React from 'react'
import styled from 'styled-components'
import ProgressIndicatorIcon from './ProgressIndicatorIcon'

const IndicatorContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

export default function ProgressIndicator() {
    // MAP THRUOUGH QUESTIONS TO POPULATE THE CORRECT AMOUNT OF DOTS

    return (
        <IndicatorContainer>
            <ProgressIndicatorIcon status={'active'} />
            <ProgressIndicatorIcon status={'inactive'} />
            <ProgressIndicatorIcon status={'inactive'} />
            <ProgressIndicatorIcon status={'inactive'} />
            <ProgressIndicatorIcon status={'inactive'} />
            <ProgressIndicatorIcon status={'inactive'} />
        </IndicatorContainer>
    )
}