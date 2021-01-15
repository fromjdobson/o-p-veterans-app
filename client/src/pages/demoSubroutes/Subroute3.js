import React from 'react'
import styled from 'styled-components'

const SubContainer = styled.div`
    margin: 0px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #a1eafb;

    & > h1 {
        margin: 0px;
        color: #545454;
        /* border: 1px dotted black; */
    }
`

export default function Subroute3() {
    return (
        <SubContainer>
            <h1>{'Subroute 3'}</h1>
        </SubContainer>
    )
}
