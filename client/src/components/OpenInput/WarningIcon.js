import React from 'react'
import styled from 'styled-components'
import warningIcon from '../../assets/Icons/status-warning-icon.svg'

const WarningIconContainer = styled.div`
    min-width: 24px;
    min-height: 24px;
    position: absolute;
    display: none;
    right: 0px;

    & > img {
        width: 100%;
        height: 100%;
    }
`

export default function WarningIcon() {
    return (
        <WarningIconContainer>
            <img src={warningIcon} alt={'Invalid input.'} />
        </WarningIconContainer>
    )
}