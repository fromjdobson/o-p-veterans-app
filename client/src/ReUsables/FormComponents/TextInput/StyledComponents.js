import React from 'react'
import styled from 'styled-components'

export const MainContainer = styled.div`
    margin: 0px 0px 0px 0px;
    box-sizing: border-box;
    padding: 8px 8px 8px 8px;
    width: 328px;
    display: flex;
    flex-direction: column;
`
export const SubContainer = styled.div`
    margin: 4px 0px 4px 0px;
    box-sizing: border-box;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const StyledInput = styled.input`
    box-sizing: border-box;
    width: 100%;
    height: 24px;
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 24px;
    letter-spacing: 0.01em;
    border-top: none;
    border-right: none;
    border-bottom: 1px solid #545454;
    border-left: none;
    background: #FFFFFF;
    opacity: 0.4;

    &:focus {
        font-family: Open Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 15px;
        line-height: 24px;
        letter-spacing: 0.01em;
        opacity: 1.0;
        outline: none;
    }
`
export const Input = (props) => <StyledInput {...props}/>

export const Label = styled.p`
    margin: 0px 0px 0px 0px;
    font-family: Open Sans;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
    color: #545454;
`
