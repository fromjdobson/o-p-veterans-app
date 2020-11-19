import React from 'react'
import styled from 'styled-components'

const VendorDetailsContainer = styled.div`
    box-sizing: border-box;
    padding: 4px 16px 4px 16px;
    height: 192px;
`

const StyledP = styled.p`
    margin: 8px 0px 8px 0px;
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 16px;
    display: flex;
    align-items: center;
    color: #545454;
`

export default function VendorDetails() {
    return (
        <VendorDetailsContainer>
            <StyledP>{'name'}</StyledP>
            <StyledP>{'phone'}</StyledP>
            <StyledP>{'email'}</StyledP>
            <StyledP>{'address 1'}</StyledP>
            <StyledP>{'address 2'}</StyledP>
            <StyledP>{'city, state'}</StyledP>
            <StyledP>{'zipcode'}</StyledP>
        </VendorDetailsContainer>
    )
}