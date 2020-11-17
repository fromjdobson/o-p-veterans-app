import React from 'react'
import styled from 'styled-components'

const ListItemContainer = styled.div`
    border: 1px dashed blue;

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