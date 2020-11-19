import React from 'react'
import styled from 'styled-components'
import SearchIcon from './SearchIcon'

const SearchBarContainer = styled.div`
    /* margin: 24px 0px 0px 24px; */
    position: relative;
    width: 344px;
    height: 40px;
    
    & > input {
        width: 100%;
        height: 100%;
        padding: 0px 0px 0px 16px;
        box-sizing: border-box;
        font-family: Open Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 15px;
        line-height: 24px;
        display: flex;
        align-items: center;
        letter-spacing: 0.01em;
        color: #545454;
        border-radius: 2px;
        border: 1px solid #545454;
        outline: none;
        &:focus {
            border: 2px solid #799C8A;
        }
    }
` 

export default function AdminSearchBare(props) {
    const { onBlur } = props

    return (
        <SearchBarContainer>
            <input placeholder={'placeholder'} onBlur={onBlur} />
            <SearchIcon />
        </SearchBarContainer>
    )
}