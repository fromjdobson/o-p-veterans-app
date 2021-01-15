import React from 'react'
import styled from 'styled-components'

const RouteContainer = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    background: #f3558e;

    & > h1 {
        margin: 0px;
        width: 328px;
        height: 40px;
        position: absolute;
        top: 40px;
        left: calc(50% - 328px/2);
        font-size: 40px;
        line-height: 40px;
        color: #FFFFFF;
        text-align: center;
        text-transform: uppercase;
        /* border: 1px dotted #FFFFFF; */
    }
`

export default function Route3() {
    return (
        <RouteContainer>
            <h1>Route 3</h1>
        </RouteContainer>
    )
}
