import React from 'react'
import styled from 'styled-components'
import { setButtonDisplay } from './utils'

const NewStyledToggleButton = styled.button`
    width: 50%;
    height: 48px;
    font-family: Open Sans;
    font-style: normal;
    font-weight: ${props => props.fontWeight};
    font-size: 15px;
    line-height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    letter-spacing: 0.02em;
    color: ${props => props.color};
    background: ${props => props.background};
    opacity: ${props => props.opacity};
    border: none;
`

export default function ToggleButton(props) {
    const { toggleObj, buttonStatus, buttonText } = props
    const { toggleState, setter } = toggleObj
    const { background, fontColor, fontWeight, opacity } = setButtonDisplay(buttonStatus)

    function setToggleStatus(status) {
        if (status === 'vendor') {
            setter(() => 'event')
        } else if (status === 'event') {
            setter(() => 'vendor')
        }
    }

    return (
        <NewStyledToggleButton
            onClick={() => setToggleStatus(toggleState)}
            background={background}
            color={fontColor}
            fontWeight={fontWeight}
            opacity={opacity}>{buttonText}</NewStyledToggleButton>
    )
}