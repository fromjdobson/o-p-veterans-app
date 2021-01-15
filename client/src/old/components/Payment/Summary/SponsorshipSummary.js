import React from 'react'
import styled from 'styled-components'
import LevelLogo from './LevelLogo'

const SponsorshipContainer = styled.div`
    box-sizing: border-box;
    display: flex;
`

const LevelText = styled.p`
    margin: 0px 0px 4px 0px;
    font-family: Open Sans;
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 16px;
    display: flex;
    align-items: center;
    color: #000000;
`

const PriceText = styled.p`
    margin: 4px 0px 0px 0px;
    font-family: Open Sans;
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 16px;
    display: flex;
    align-items: center;
    color: #000000;
`

const RowWrapper = styled.div`
    width: 100%;
    padding: 12px 0px 12px 0px;
`

export default function Sponsorship(props) {
    const { sponsorshipLevel, price } = props
    
    return (
        <SponsorshipContainer>
            <LevelLogo />
            <RowWrapper>
                <LevelText>{sponsorshipLevel}</LevelText>
                <PriceText>{price}</PriceText>
            </RowWrapper>
        </SponsorshipContainer>
    )
}