import React from 'react'
import styled from 'styled-components'

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
    const { toggleState } = toggleObj
    const { background, fontColor, fontWeight, opacity } = setButtonDisplay(buttonStatus)
    console.log(toggleState, background)


    function setButtonDisplay(status) {
        if (status === 'active') {
            return {
                background: `#FFFFFF`,
                fontColor: `#4E6A5B`,
                fontWeight: `bold`,
                opacity: 1.0
            }
        } else if (status === 'inactive') {
            return {
                background: `#3A4F44`,
                fontColor: `#FFFFFF`,
                fontWeight: `normal`,
                opacity: 0.4
            }
        }
    }


    return (
        <NewStyledToggleButton
             background={background}
             color={fontColor}
             fontWeight={fontWeight}
             opacity={opacity}>{buttonText}</NewStyledToggleButton>
    )
}