import React from 'react'
import styled from 'styled-components'
import { Header } from '../components/Header'
import { TempDiagram } from '../components/TempDiagam/'
import { AdminSearchBar } from '../components/AdminSearchBar'
import { AdminList } from '../components/AdminList'
import { dummyInfoArr } from '../components/AdminList/utils'

const PageContainer = styled.div`
    height: 100%;
    background: #FFFFFF;
    
`

export default function Admin() {
    return (
        <PageContainer>
            <Header />
            <TempDiagram />
            <AdminSearchBar />
            <AdminList vendorInfo={dummyInfoArr} />
        </PageContainer>
    )
}
