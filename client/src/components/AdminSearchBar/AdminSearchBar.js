import React from 'react'
import styled from 'styled-components'
import searchIcon from '../../assets/icons/search-icon.svg'

const SearchBarContainer = styled.div`
    margin: 24px 0px 0px 24px;
    position: relative;
    width: 344px;
    height: 40px;
    /* left: 51px; */
    /* top: 514px; */
    /* opacity: 0.5; */
    /* border: 1px solid #545454; */
    /* box-sizing: border-box; */
    /* border-radius: 2px; */
    /* border: 1px solid orange; */

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
        /* box-sizing: border-box; */
        border-radius: 2px;
        border: 1px solid #545454;
        outline: none;
        /* outline: 1px solid #545454; */

        &:focus {
            border: 2px solid #799C8A;
        }
    }

    & > img {
        width: 24px;
        height: 24px;
        position: absolute;
        top: calc(50% - 24px/2);
        right: 16px;
        /* border: 1px dotted blue; */
    }
`

export default function AdminSearchBare() {
    return (
        <SearchBarContainer>
            <input placeholder={'placeholder'} />
            <img src={searchIcon} alt={'Enter a vendor name to search.'} />
        </SearchBarContainer>
    )
}