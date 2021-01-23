import React from 'react'
import styled from 'styled-components'
import ProgressIndicator from './ProgressIndicator'

const ProgressSectionContainer = styled.div`
    padding: 4px 8px 4px 8px;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;

    & > p {
        margin: 0px 0px 0px 0px;
        font-family: Helvetica Neue;
        font-style: normal;
        font-weight: bold;
        font-size: 15px;
        line-height: 24px;
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: 0.02em;
        text-transform: uppercase;
        color: #4E6A5B;
    }
`

export default function ProgressSection(props) {
    const { title } = props

    return (
        <ProgressSectionContainer>
            <p>{title}</p>
            <ProgressIndicator />
        </ProgressSectionContainer>
    )
}