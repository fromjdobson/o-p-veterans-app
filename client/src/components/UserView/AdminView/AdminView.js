import React from 'react'
import styled from 'styled-components'
import { Header } from '../../Header'
import { AdminSearchBar } from '../../AdminSearchBar'
import { VendorList } from '../../VendorList'

const AdminViewContainer = styled.div`
    padding: 0px 24px 0px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid lightcoral;
`

const TitleContainer = styled.div`
    box-sizing: border-box;
    width: 100%;
    border: 1px solid black;
`

const TitleText = styled.h2`
    margin: 0px;
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 32px;
    letter-spacing: 0.02em;
    color: #545454;
    border: 1px solid mediumspringgreen;
`

const SubtitleText = styled.p`
    margin: 0px;
    font-family: Open Sans;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 0.01em;
    color: #545454;
    border: 1px solid mediumspringgreen;
`

const MapPlaceholder = styled.div`

    width: 100%;
    height: 375px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: gray;

    & > p {
        margin: 0px;
        font-family: Open Sans;
        font-size: 32px;
        color: #FFFFFF;
    }
`

export default function AdminView() {
    return (
        <AdminViewContainer>
            <Header />
            <TitleContainer>
                <TitleText>{'Welcome, Denny.'}</TitleText>
                <SubtitleText>{'Here is a current list, and map, of vendors registered for Veteran Fest.'}</SubtitleText>
            </TitleContainer>
            <MapPlaceholder>
                <p>Diagram Placeholder</p>
            </MapPlaceholder>
            <AdminSearchBar />
            <VendorList />
        </AdminViewContainer>
    )
}