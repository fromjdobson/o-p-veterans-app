import React from 'react'
import styled from 'styled-components'
import BenefitList from './BenefitList'
import TextButton from './TextButton'

const CardContainer = styled.div`
    /* box-sizing: border-box; */
    position: relative;
    width: 328px;
    height: 500px;
    background: #FFFFFF;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.14), 0px 2px 2px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2);
    border-radius: 8px;

    & > h1 {
        margin: 0px;
        height: 40px;
        position: absolute;
        top: 32px;
        left: 24px;
        right: 24px;
        font-family: Open Sans;
        font-style: normal;
        font-weight: bold;
        font-size: 36px;
        line-height: 40px;
        display: flex;
        align-items: center;
        letter-spacing: 0.03em;
        text-transform: uppercase;
        color: #545454;
        /* border: 1px dotted orange; */
    }

    & > h3 {
        margin: 0px;
        height: 40px;
        position: absolute;
        top: 152px;
        left: 24px;
        right: 24px;
        font-family: Helvetica Neue;
        font-style: normal;
        font-weight: bold;
        font-size: 32px;
        line-height: 40px;
        display: flex;
        align-items: center;
        letter-spacing: 0.03em;
        color: #799C8A;
        /* border: 1px dotted orange; */

    }

    & > p {
        margin: 0px;
        height: 48px;
        position: absolute;
        top: 80px;
        left: 24px;
        right: 24px;
        font-family: Open Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
        display: flex;
        align-items: center;
        letter-spacing: 0.015em;
        color: #545454;
        /* border: 1px dotted orange; */
    }
`

export default function SelectionCard() {
    return (
        <CardContainer>
            <h1>{'Stryker'}</h1>
            <p>{'Choose the right package for your organization.'}</p>
            <h3>{'99,999'}</h3>
            <BenefitList />
            <TextButton />
        </CardContainer>
    )
}
