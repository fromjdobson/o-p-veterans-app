import React from 'react'
import styled from 'styled-components'
import ListItem from './ListItem'

const PerksContainer = styled.div`
    border: 1px solid darkgreen;
`

export default function Perks() {
    return (
        <PerksContainer>
            <ListItem text={'List Item'} />
        </PerksContainer>
    )
}