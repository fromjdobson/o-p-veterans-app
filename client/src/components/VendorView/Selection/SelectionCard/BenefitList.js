import React from 'react'
import styled from 'styled-components'
import ListItem from './ListItem'

const ListContainer = styled.div`
    position: absolute;
    top: 216px;
    left: 24px;
    right: 24px;
    /* border: 1px dashed purple;    */

    & .space {
        margin: 8px 0px 8px 0px;
    }
`





export default function BenefitList() {
    return (
        <ListContainer>
            <ListItem />
            <ListItem classname={'space'} />
            <ListItem classname={'space'} />
            <ListItem />
        </ListContainer>
    )
}
