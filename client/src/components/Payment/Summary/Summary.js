import React from 'react'
import styled from 'styled-components'
import Sponsorship from './SponsorshipSummary'
import BoothSummary from './BoothSummary'

const SummaryContainer = styled.div`
    max-width: 375px;
    padding: 40px 24px 40px 24px;
    border: 1px solid #EAEAEA;

    @media (min-width: 768px) {
        padding: 48px 24px 48px 24px;
    }
`

export default function Summary() {
    return (
        <SummaryContainer>
            <Sponsorship sponsorshipLevel={'Abrams level sponsorship'} price={'$999,999.99'} />
            <BoothSummary booth={'A01'} price={'$999,999.99'} />
        </SummaryContainer>
    )
}