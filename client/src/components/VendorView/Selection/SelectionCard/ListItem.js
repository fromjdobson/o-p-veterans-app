import React from 'react'
import styled from 'styled-components'

const ItemContainer = styled.div`
    border: 1px dotted dodgerblue;
`

export default function ListItem() {
    return (
        <ItemContainer>
            <p>Item</p>
        </ItemContainer>
    )
}
