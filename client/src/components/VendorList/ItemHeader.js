import React from 'react'
import styled from 'styled-components'
import OpenIcon from './OpenIcon'

const ItemHeaderContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    border: 1px solid black;
`

const VendorNameText = styled.p`
    margin: 0px;
    width: 100%;
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 24px;
    display: flex;
    align-items: center;
    color: #545454;
    /* border: 1px solid lightgreen; */
`

const BoothNumberText = styled.p`
    margin: 0px 8px 0px 8px;
    width: 40px;
    /* height: 24px; */
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #545454;
    /* border: 1px solid lightgreen; */
`

export default function ItemHeader() {
    return (
        <ItemHeaderContainer>
            <VendorNameText>{'Bunty Soap Company'}</VendorNameText>
            <BoothNumberText>{'A01'}</BoothNumberText>
            <OpenIcon />
        </ItemHeaderContainer>
    )
}


