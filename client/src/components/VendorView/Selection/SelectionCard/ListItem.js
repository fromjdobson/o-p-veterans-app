import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Icon } from '../../../../assets/Icons/card-checkmark-icon.svg'

const ItemContainer = styled.div`
    box-sizing: border-box;
    height: 24px;
    display: flex;
    align-items: center;
    /* border: 1px dotted dodgerblue; */

    & > p {
        box-sizing: border-box;
        margin: 0px 8px 0px 16px;
        width: 100%;
        height: 24px;
        font-family: Open Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 24px;
        display: flex;
        align-items: center;
        letter-spacing: 0.015em;
        color: #545454;
        /* border: 1px dashed orange; */
    }
`

const StyledIcon = styled(Icon)`
    /* margin: 0px 0px 0px 8px; */
    min-width: 16px;
    min-height: 16px;
    display: block;
    /* border: 2px dotted red; */
`

export default function ListItem(props) {
    const { classname } = props 
    return (
        <ItemContainer className={classname}>
            <StyledIcon />
            <p>{'Recognition on website'}</p>
        </ItemContainer>
    )
}
