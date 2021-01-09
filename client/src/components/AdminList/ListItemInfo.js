import React from 'react'
import styled from 'styled-components'

const InfoContainer = styled.div`
    background: #CCCCCC;

    & > p {
        margin: 0px;
    }
`

export default function ListItemInfo() {
    return (
        <InfoContainer>
            <p>Info</p>
        </InfoContainer>
    )
}
