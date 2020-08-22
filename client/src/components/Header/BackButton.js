import React from 'react'
import styled from 'styled-components'
import backArrow from '../../images/back-arrow-24px.svg'

const BackButtonContainer = styled.div`
    display: flex;

    & > img {
        width: 24px;
        height: 24px;
    }

    & > p {
        margin: 0px 0px 0px 8px;
        font-family: Open Sans;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        display: none;
        align-items: center;
        letter-spacing: 0.01em;
        color: #403926;

        @media (min-width: 768px) {
            display: flex;
        }
    }
`

export default function BackButton() {
    return (
        <BackButtonContainer>
            <img src={backArrow} alt='Click to return to O.P. Veteran' />
            <p>Back</p>
        </BackButtonContainer>
    )
}