import React from 'react'
import styled from 'styled-components'
import { openCloseExpand } from './utils'
import cardClosedIcon from '../../assets/Icons/card-closed-icon.svg'

const HeaderContainer = styled.div`
    padding: 0px 8px 0px 8px;
    height: 56px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* border: 1px dotted yellow; */

    & > .logo-image {
        box-sizing: border-box;
        height: 56px;
        display: none;
        border: 1px dotted blue;

        @media (min-width: 768px) {
            display: block;
        }
    }

    & > .vendor-name {
        margin: 0px;
        width: 224px;
        height: 24px;
        font-family: Open Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 24px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        color: #545454;
        /* border: 1px dotted blue; */
    }

    & > .booth-number {
        margin: 0px;
        width: 40px;
        height: 24px;
        font-family: Open Sans;
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #545454;
        /* border: 1px dotted blue; */
    }

    & > .more-icon {
        width: 24px;
        height: 24px;
        right: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
        /* border: 1px dotted blue; */
    }
`

export default function ItemHeader(props) {
    const {
        vendorName, 
        boothNumber,
        isExpanded,
        setIsExpanded
    } = props

    return (
        <HeaderContainer>
            {/* <img className={'logo-image'} src={logo} alt={'logo'} /> */}
            <p className={'vendor-name'}>{vendorName}</p>
            <p className={'booth-number'}>{boothNumber}</p>
            <img
                className={'more-icon'} 
                src={cardClosedIcon} 
                alt={'Click to see less.'}
                onClick={() => openCloseExpand(isExpanded, setIsExpanded)}
            />
        </HeaderContainer>
    )
}
