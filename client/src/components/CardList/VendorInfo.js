import React from 'react'
import styled from 'styled-components'
import companyLogo from'../../assets/images/bunty-logo.png'

const VendorInfoContainer = styled.div`
    /* margin: 16px 0px 0px 0px; */
    display: flex;
    align-items: center;
    /* border: 1px dotted gray; */
`

const VendorName = styled.p`
    margin: 0px 0px 0px 0px;
    width: 100%;
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    letter-spacing: 0.01em;
    color: #403926;
    /* border: 1px dotted gray; */
`

const VendorDescription = styled.p`
    margin: 0px;
    width: 100%;
    font-family: Open Sans;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    display: flex;
    align-items: flex-end;
    letter-spacing: 0.02em;
    color: #403926;
    /* border: 1px dotted blue; */
`

const DetailsWrapper = styled.div`
    margin: 0px 0px 0px 8px;
    width: 100%;
    /* border: 1px solid green; */
`

const LogoContainer = styled.div`
    width: 72px;
    height: 48px;
    /* border: 1px dotted orange; */

    & > img {
        width: 100%;
        height: 100%;
    }
`

export default function VendorInfo(props) {
    const { userName, vendorDesc } = props

return (
        <VendorInfoContainer>
            <LogoContainer>
                <img src={companyLogo} alt={'Company logo.'} />
            </LogoContainer>
            <DetailsWrapper>
                <VendorName>{userName}</VendorName>
                <VendorDescription>{vendorDesc}</VendorDescription>
            </DetailsWrapper>
        </VendorInfoContainer>
    )
}