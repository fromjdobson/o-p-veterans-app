import React from 'react'
import styled from 'styled-components'
import ListItem from './ListItem'

const ListContainer = styled.div`
    /* height: 188px; */
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
            <ListItem itemText={'Recognition on website'} visibility={'visible'} opacity={1.0} />
            <ListItem itemText={'Announcement at event'}classname={'space'} visibility={'visible'} opacity={1.0} />
            <ListItem itemText={'Logo on shirts'}classname={'space'} visibility={'hidden'} opacity={0.5} />
            <ListItem itemText={'O.P. Veteran swag at event'} classname={'space'} visibility={'hidden'} opacity={0.5} />
            <ListItem itemText={'Booth at event'} classname={'space'} visibility={'hidden'} opacity={0.5} />
            <ListItem itemText={'Some other perk'} visibility={'hidden'} opacity={0.5} />
        </ListContainer>
    )
}
