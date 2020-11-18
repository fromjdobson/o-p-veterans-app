import React from 'react'
import styled from 'styled-components'
import closedIcon from '../../assets/Icons/card-closed-icon.svg'

const OpenIconContainer = styled.div`
    min-width: 24px;
    min-height: 24px;
    border: 1px dotted dodgerblue;

    & > img {
        width: 100%;
        height: 100%;
    }
`

export default function OpenIcon() {
    return (
        <OpenIconContainer>
            <img src={closedIcon} alt={'Click to epxand.'} />
        </OpenIconContainer>
    )
}