import React from 'react'
import styled from 'styled-components'
import ExpandComponent from './ExpandComponent'
import ListItem from './ListItem'

const PerksContainer = styled.div`
    /* box-sizing: border-box; */
    width: 312px;
    /* border: 1px solid darkgreen; */
`

const RowWrapper = styled.div`
    box-sizing: border-box;
    margin: 20px 0px 0px 0px;
    display: block;
    /* background: lightblue; */

    & > h4 {
        margin: 0px 0px 16px 0px;
        font-family: Open Sans;
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 24px;
        display: flex;
        align-items: center;
        color: #545454;
    }
`

export default function Perks() {
    return (
        <PerksContainer>
            <ExpandComponent />
            <RowWrapper>
                <h4>Perks for this level:</h4>
                <ListItem text={'List Item'} />
                <ListItem text={'List Item'} />
                <ListItem text={'List Item'} />
            </RowWrapper>
        </PerksContainer>
    )
}