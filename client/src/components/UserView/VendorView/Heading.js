import React from 'react'
import styled from 'styled-components'

const HeadingContiner = styled.div`
    width: 328px;
    border: 2px dashed dodgerblue;

    & > h2 {
        margin: 0px 0px 0px 0px;
        font-family: Helvetica Neue;
        font-style: normal;
        font-weight: bold;
        font-size: 32px;
        line-height: 32px;
        display: flex;
        align-items: center;
        letter-spacing: 0.03em;
        color: #545454;
    }

    & > p {
        margin: 16px 0px 0px 0px;
        font-family: Helvetica Neue;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 16px;
        letter-spacing: 0.02em;
        color: #545454;
    }
`

export default function Heading(props) {
    const { heading, subheading } = props

    return (
        <HeadingContiner>
            <h2>{heading}</h2>
            <p>{subheading}</p>
        </HeadingContiner>
    )
}