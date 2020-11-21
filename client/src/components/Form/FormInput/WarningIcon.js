import React from 'react'
import styled from 'styled-components'
import { ReactComponent as StatusWarningIcon } from '../../../assets/Icons/status-warning-icon.svg'

const IconContainer =  styled.div`
    max-width: 24px;
    max-height: 24px;
    position: absolute;
    right: 0px;
    display: ${props => props.display};
    justify-content: center;
    align-items: center;
    /* border: 1px dotted dodgerblue; */

    & > ${StatusWarningIcon} {
        width: 100%;
        height: 100%;
    }
`

export default function WarningIcon(props) {
    const { display } = props

    return (
        <IconContainer display={display}>
            <StatusWarningIcon />
        </IconContainer>
    )
}