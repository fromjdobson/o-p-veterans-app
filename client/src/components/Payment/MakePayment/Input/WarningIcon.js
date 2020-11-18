import React from 'react'
import styled from 'styled-components'
import warningIcon from '../../../../assets/Icons/status-warning-icon.svg'

const WarningIconContainer = styled.div`
    margin: 4px 0px 0px -24px;
    width: 24px;
    height: 24px;
    display: none;
    /* border: 1px dotted green; */

    & > img {
        width: 100%;
        height: 100%;
    }
`

export default function WarningIcon() {
    return (
        <WarningIconContainer>
            <img src={warningIcon} alt={'Warning'} />
        </WarningIconContainer>
    )
}