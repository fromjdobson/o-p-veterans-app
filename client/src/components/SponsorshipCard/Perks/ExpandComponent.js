import React from 'react'
import styled from 'styled-components'
import cardClosedIcon from '../../../assets/Icons/card-closed-icon.svg'

const ExpandContainer = styled.div`
    /* box-sizing: border-box; */
    /* width: 312px; */
    display: flex;
    /* border: 1px solid green; */

    & > p {
        margin: 0px 8px 0px 0px;
        width: 170px;
        height: 24px;
        font-family: Open Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 24px;
        display: flex;
        align-items: center;
        color: #799C8A;
        /* border: 1px dotted gray; */
    }

    & > img {
        margin: 0px 0px 0px 0px;
        /* border: 1px dotted gray; */
    }
`

export default function ExpandComponent() {
    return (
        <ExpandContainer>
            <p>Expand for perks</p>
            <img src={cardClosedIcon} alt={'Click to see more information.'} />
        </ExpandContainer>
    )
}