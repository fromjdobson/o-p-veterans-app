import React from 'react'
import styled from 'styled-components'
import BarItem from './BarItem'
// import { setStep } from './utils'

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