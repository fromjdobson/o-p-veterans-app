import React, { useContext } from 'react'
import styled from 'styled-components'
import { SponsorshipCardContext } from '../../../providers/SponsorshipContext'
import ExpandComponent from './ExpandComponent'
import ListItem from './ListItem'

const PerksContainer = styled.div`
    width: 312px;
`

const RowWrapper = styled.div`
    box-sizing: border-box;
    margin: 20px 0px 0px 0px;
    display: ${props => props.display};

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
    const [isExpanded] = useContext(SponsorshipCardContext)
    const { display } = setDisplay(isExpanded)

    function setDisplay(status) {
        if  (status === false) {
            return {
                display: `none`
            }
        } else if (status === true) {
            return {
                display: `block`
            }
        }
    }

    return (
        <PerksContainer>
            <ExpandComponent />
            <RowWrapper display={display}>
                <h4>Perks for this level:</h4>
                <ListItem text={'List Item'} />
                <ListItem text={'List Item'} />
                <ListItem text={'List Item'} />
            </RowWrapper>
        </PerksContainer>
    )
}