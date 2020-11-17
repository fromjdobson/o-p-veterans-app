import React from 'react'
import styled from 'styled-components'

const ListItemContainer = styled.div`
    margin: 4px 0px 4px 0px;
    /* width: 312px; */
    /* box-sizing: border-box; */

    & > p {
        margin: 0px;
        font-family: Open Sans;
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        line-height: 16px;
        display: flex;
        align-items: center;
        color: #545454;
    }
`

export default function ListItem(props) {
    const { text } = props
    return (
        <ListItemContainer>
            <p>{text}</p>
        </ListItemContainer>
    )
}