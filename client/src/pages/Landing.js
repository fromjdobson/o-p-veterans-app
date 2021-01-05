import React from 'react'
import styled from 'styled-components'
import { Header } from '../components/Header'

const PageContainer = styled.div`
    border: 2px dashed lightcoral;
`

export default function Landing() {
    return (
        <PageContainer>
            <Header />
        </PageContainer>
    )
}
