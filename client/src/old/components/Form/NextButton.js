import React from 'react'
import styled from 'styled-components'
import rightArrowIcon from '../../assets/Icons/arrow-right-icon.svg'

const ButtonContainer = styled.button`
    box-sizing: border-box;
    padding: 0px;
    width: 80px;
    height: 24px;
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #618572;
    background: #FFFFFF;
    border: none;
    outline: 0px;

    & > img {
        width: 16x;
        height: 16px;
    }

    & > p {
        box-sizing: border-box;
        margin: 0px;
        font-family: Open Sans;
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 24px;
        display: flex;
        align-items: center;
        text-align: right;
        color: #618572;
        border: 1px dotted blue;
    }
`

export default function NextButton(props) {
    const { className } = props

    return  <ButtonContainer className={className}>
                {'Next'}
                <img src={rightArrowIcon} alt={'Click to proceed.'} />
            </ButtonContainer>
}
