import React from 'react'
import styled from 'styled-components'
import OpenIcon from './OpenIcon'

const ItemHeaderContainer = styled.div`
    display: flex;
    justify-content: flex-end;
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
`

const BoothNumberText = styled.p`
    margin: 0px 8px 0px 8px;
    width: 40px;
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #545454;
`

export default function ItemHeader(props) {
    const { expandContainer, vendorName } = props
    let expandObj = {...expandContainer}

    return (
        <ItemHeaderContainer>
            <VendorNameText>{vendorName}</VendorNameText>
            <BoothNumberText>{'A01'}</BoothNumberText>
            <OpenIcon expandObj={expandObj} />
        </ItemHeaderContainer>
    )
}


