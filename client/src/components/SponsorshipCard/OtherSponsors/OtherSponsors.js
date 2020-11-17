import React from 'react'
import styled from 'styled-components'
import SponsorLogo from './SponsorLogo'

const OtherSponsorsContainer = styled.div`
    box-sizing: border-box;
    margin: 24px 0px 24px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
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
    box-sizing: border-box;
    width: 100%;
    display: flex;
    justify-content: center;
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