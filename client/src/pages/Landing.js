import React from 'react'
import styled from 'styled-components'

const PageContainer = styled.div`
    height: 100%;
    background: lightcoral;

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
        color: #FFFFFF;
        text-transform: uppercase;
        border: 1px dotted blue;
    }
`

export default function Landing() {
    return (
        <PageContainer>
            <h2>Landing Page</h2>
        </PageContainer>
    )
}
