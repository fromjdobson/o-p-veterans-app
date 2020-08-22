import React from 'react'
import styled from 'styled-components'
import { Display } from '../Display'

const MainContainer = styled.div`
    width: 100%;
    height: 92%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    /* border: 1px solid blue; */
`

export default function Main() {

    return (
        <MainContainer>
            <Display />
        </MainContainer>
    )
}