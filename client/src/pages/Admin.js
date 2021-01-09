import React from 'react'
import styled from 'styled-components'
import { Header } from '../components/Header'
import { TempDiagram } from '../components/TempDiagam/'

const PageContainer = styled.div`
    height: 100%;
    background: #FFFFFF;
    
`

export default function Admin() {
    return (
        <PageContainer>
            <Header />
            <TempDiagram />
        </PageContainer>
    )
}
