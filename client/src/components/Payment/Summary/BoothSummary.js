import React from 'react'
import styled from 'styled-components'

const BoothContainer = styled.div`
    box-sizing: border-box;
    margin: 12px 0px 0px 0px;
    display: flex;
`

const BoothText = styled.p`
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

const ImageHolder = styled.div`
    margin: 0px 16px 0px 0px;
    min-width: 64px;
    min-height: 64px;
    background: green;
`

const RowWrapper = styled.div`
    width: 100%;
    padding: 12px 0px 12px 0px;
`

export default function Sponsorship(props) {
    const { booth, price } = props

    return (
        <BoothContainer>
            <ImageHolder />
            <RowWrapper>
                <BoothText>{booth}</BoothText>
                <PriceText>{price}</PriceText>
            </RowWrapper>
        </BoothContainer>
    )
}