import React from 'react'
import styled from 'styled-components'
import { Header } from '../../Header'

const SelectorContainer = styled.div`
    border: 1px dashed lightcoral;
`

const HeadingTitle = styled.h3`
    margin: 0px 0px 0px 0px;
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    line-height: 32px;
    display: flex;
    align-items: center;
    letter-spacing: 0.015em;
    color: #545454;
    border: 1px dotted orange;
`

const HeadingSubtitle = styled.p`
    margin: 0px 0px 0px 0px;
    height: 16px;
    font-family: Open Sans;
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.02em;
    color: #545454;
    border: 1px dotted orange;
`

export default function SponsorshipSelector() {
    return (
        <SelectorContainer>
            <Header />
            <HeadingTitle>{'Sponsorship Level Selection'}</HeadingTitle>
            <HeadingSubtitle>{'Choose the right package for your organization.'}</HeadingSubtitle>
        </SelectorContainer>
    )
}
