import React, { useContext } from 'react'
import { AppStateContext } from '../../providers/Store'
import styled from 'styled-components'
import Item from './Item'


const VendorViewContainer = styled.div`
    margin-top: 60px;
    box-sizing: border-box;
    width: 328px;
    /* height: 600px; */
    display: flex;
    flex-direction: column;
    padding: 20px 24px 48px 24px;
    background: #DAD3C1;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.14), 0px 3px 4px rgba(0, 0, 0, 0.12), 0px 1px 5px rgba(0, 0, 0, 0.2);
    border-radius: 8px;

    @media (min-width: 768px) {
        width: 624px;
        height: 720px;
        padding: 48px 80px 48px 80px;
    }
    /* border: 1px solid lightcoral; */
`

const Heading = styled.h3`
    margin: 0px 0px 0px 0px;
    width: 100%;
    height: 64px;
    font-family: Helvetica Neue;
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    line-height: 32px;
    letter-spacing: 0.015em;
    color: #403926;
    overflow: hidden;
    /* border: 1px dotted gray; */
`

const SubHeading = styled.h6`
    margin: 0px 0px 16px 0px;
    width: 100%;
    height: 72px;
    font-family: Helvetica Neue;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.015em;
    color: #403926;
    overflow: hidden;
    /* border: 1px dotted gray; */
`

const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 16px;
    /* border: 1px solid green; */
`

export default function VendorView() {
    const [appState] = useContext(AppStateContext)
    const { name, companyName } = appState.currentUser
    // Need to pull in the following properties from the currentUser obj
    // once the forms are built out - the value of those inputs will populate here
    // city, state, suite, zipcode
    console.log('from vendorView:', name, companyName)
    return (
        <VendorViewContainer>
            <Heading>{`Welcome, ${'User'}.`}</Heading>
            <SubHeading>{'View and make changes to your vendor profile.'}</SubHeading>
            <ListContainer>
                <Item label={companyName} />
                <Item label={name} />
                <Item label={'Address'} />
                <Item label={'Apt/Suite'} />
                <Item label={'City'} />
                <Item label={'State'} />
                <Item label={'Zipcode'} />
            </ListContainer>
        </VendorViewContainer>
    )
}