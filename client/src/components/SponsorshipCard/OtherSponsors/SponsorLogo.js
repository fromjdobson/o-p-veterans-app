import React from 'react'
import styled from 'styled-components'
import cover6Logo from '../../../assets/images/cover-six-logo.png'

const SponsorLogoContainer = styled.div`
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 1px solid orange;

    & > img {
        width: 100%;
        height: 100%;
    }
`

export default function SponsorLogo() {
    return (
        <SponsorLogoContainer>
            <img src={cover6Logo} alt={'Cover 6 Outdoors logo.'} />
        </SponsorLogoContainer>
    )
}