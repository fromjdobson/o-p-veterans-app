import React from 'react'
import styled from 'styled-components'

const DetailsContainer = styled.div`
    padding: 16px 16px 16px 16px;
    /* border: 1px dotted gold; */

    & > p {
        margin: 0px 0px 8px 0px;
        font-family: Open Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 16px;
        /* display: flex;
        align-items: center; */
        text-align: left;
        color: #545454;
        /* border: 1px dotted gray; */
    }
`

export default function Details() {
    return (
        <DetailsContainer>
            <p>Frank Galikanokus</p>
            <p>512-555-1212</p>
            <p>f.galikanokus@email.com</p>
            <p>1234 Hero Lane</p>
            <p>{'Suite #500'}</p>
            <p>Austin, TX</p>
            <p>78611</p>
        </DetailsContainer>
    )
}