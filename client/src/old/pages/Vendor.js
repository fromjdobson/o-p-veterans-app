import React from 'react'
import styled from 'styled-components'
import { Header } from '../components/Header'
import { Form } from '../components/Form'

const PageContainer = styled.div`
    height: 100%;
    /* background: lightseagreen; */

    & > h2 {
        margin: 0px;
        width: 400px;
        height: 48px;
        position: relative;
        top: 80px;
        left: calc(50% - 400px/2);
        font-size: 48px;
        font-family: Open Sans;
        line-height: 48px;
        text-align: center;
        color: #303030;
        text-transform: uppercase;
        border: 1px dotted blue;
    }
`

export default function Vendor() {

    return (
        <PageContainer>
            <Header />
            <Form />
        </PageContainer>
    )
}
