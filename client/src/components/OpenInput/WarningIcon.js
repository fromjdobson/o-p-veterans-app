import React from 'react'
import styled from 'styled-components'
import warningIcon from '../../assets/Icons/status-warning-icon.svg'

const WarningIconContainer = styled.div`
    border: 1px dotted dodgerblue;
`

export default function WarningIcon() {
    return (
        <WarningIconContainer>
            <img src={warningIcon} alt={'Invalid input.'} />
        </WarningIconContainer>
    )
}