import React from 'react'
import styled from 'styled-components'
import { ReactComponent as StatusWarningIcon } from '../../../assets/Icons/status-warning-icon.svg'

const IconContainer =  styled.div`
    max-width: 32px;
    max-height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px dotted dodgerblue;

    & > ${StatusWarningIcon} {
        width: 100%;
        height: 100%;
    }
`

export default function WarningIcon() {
    return (
        <IconContainer>
            <StatusWarningIcon />
        </IconContainer>
    )
}