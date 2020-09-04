import React from 'react'
import styled from 'styled-components'

const VendorInfoContainer = styled.div`
    border: 1px dotted gray;
`

const VendorName = styled.p`
    margin: 0px 0px 0px 0px;
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    letter-spacing: 0.01em;
    color: #403926;
    border: 1px dotted gray;
`

export default function VendorInfo(props) {
    const { userName } = props
    // console.log(props)
    return (
        <VendorInfoContainer>
            <VendorName>{userName}</VendorName>
        </VendorInfoContainer>
    )
}