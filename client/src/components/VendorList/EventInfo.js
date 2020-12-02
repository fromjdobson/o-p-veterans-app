import React from 'react'
import styled from 'styled-components'
import TextButton from './TextButton'

const EventInfoContainer = styled.div`
    box-sizing: border-box;
    padding: 16px;
    height: 192px;
`

const StyledP = styled.p`
    margin: 8px 0px 8px 0px;
    width: 100%;
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 16px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: #545454;
`

const SponsorLevelText = styled.div`
    margin: 0px 0px 0px 0px;
    width: 100%;
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 16px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    text-align: right;
    color: #545454;
`

const RowWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`

export default function EventInfo(props) {
    const { nonProfit, sponsorship, veteranOwned } = props

    return (
        <EventInfoContainer>
            <SponsorLevelText>{`${sponsorship}`}</SponsorLevelText>
            <StyledP>{`${veteranOwned}`}</StyledP>
            <StyledP>{`${nonProfit}`}</StyledP>
            <StyledP>{'powered'}</StyledP>
            <RowWrapper>
                <TextButton buttonText={'Change booth number'} />
            </RowWrapper>
        </EventInfoContainer>
    )
}