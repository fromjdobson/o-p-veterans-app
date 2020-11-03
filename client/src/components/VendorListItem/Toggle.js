import React from 'react'
import styled from 'styled-components'
import { setDisplay } from './utils'

const ToggleContainer = styled.div`
    position: relative;
    width: 50%;
    height: 48px;
    color: ${props => props.color};
    font-weight: ${props => props.fontWeight};
    background: ${props => props.background};
    opacity: ${props => props.opacity};

    & > p {
        margin: 0px;
        width: 120px;
        height: 24px;
        position: absolute;
        top: calc(50% - 24px/2);
        left: calc(50% - 120px/2);
        font-family: Open Sans;
        font-style: normal;
        font-size: 15px;
        line-height: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
        letter-spacing: 0.02em;
    }
`

export default function Toggle(props) {
    const { text, status } = props
    const { color, fontWeight, background, opacity } = setDisplay(status)
    console.log(fontWeight)

    return (
        <ToggleContainer background={background} color={color} opacity={opacity} fontWeight={fontWeight}>
            <p>{text}</p>
        </ToggleContainer>
    )
}