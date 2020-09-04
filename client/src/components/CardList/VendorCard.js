import React from 'react'
import styled from 'styled-components'
import VendorInfo from './VendorInfo'

const VendorCardContainer = styled.div`
    border: 1px solid red;
`

const VendorName = styled.p`
    margin: 0px;
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
        </VendorCardContainer>
    )
}