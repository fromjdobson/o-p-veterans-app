import React from 'react'
import styled from 'styled-components'
import SponsorLogo from './SponsorLogo'

const OtherSponsorsContainer = styled.div`
    /* border: 1px solid orange; */

    & > p {
        margin: 0px;
        font-family: Open Sans;
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 24px;
        color: #545454;
        /* border: 1px dotted blue; */
    }
`

const LogosContainer = styled.div`
    width: 200px;
    display: flex;
    /* border: 1px solid black; */
`

export default function OtherSponsors() {
    return (
        <OtherSponsorsContainer>
            {/* Remeber to have sponsor level change dynamically */}
            <p>{'Other ABRAMS level sponsors.'}</p>
            <LogosContainer>
                <SponsorLogo />
                <SponsorLogo />
                <SponsorLogo />
            </LogosContainer>
        </OtherSponsorsContainer>
    )
}