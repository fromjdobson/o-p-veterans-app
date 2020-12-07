import React from 'react'
import styled from 'styled-components'
import { Header } from '../../Header'

const DashboardContainer = styled.div`
    border: 1px solid lightcoral;

    & > p {
        margin: 0px;
    }
`

export default function TempDashboard() {
    return (
        <DashboardContainer>
            <Header />
            <p>Dashboard</p>
        </DashboardContainer>
    )
}
