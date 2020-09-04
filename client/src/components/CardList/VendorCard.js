import React from 'react'
import styled from 'styled-components'
import VendorInfo from './VendorInfo'
import BoothDetails from './BoothDetails'
import EditBooth from './EditBooth'

const VendorCardContainer = styled.div`
    /* margin: 0px 0px 16px 0px; */
    box-sizing: border-box;
    padding: 16px 16px 16px 16px;
    width: 100%;
    background: #F6F4EF;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.14), 0px 2px 2px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    /* border: 1px solid red; */
`

const VendorName = styled.p`
    margin: 0px 0px 8px 0px;
    width: 100%;
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.01em;
    color: #403926;
`

export default function VendorCard(props) {
    const { company, userName } = props
    // console.log(userName)
    return (
        <VendorCardContainer>
            <VendorName>{company}</VendorName>
            <VendorInfo userName={userName} />
            <BoothDetails />
            <EditBooth />
        </VendorCardContainer>
    )
}