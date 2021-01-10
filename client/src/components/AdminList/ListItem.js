import React, { useState } from 'react'
import styled from 'styled-components'
import ListItemInfo from './ListItemInfo'
import cardClosedIcon from '../../assets/Icons/card-closed-icon.svg'

const ItemContainer = styled.div`
    box-sizing: border-box;
    width: 100%;
    /* height: 56px; */
    /* position: relative; */
    /* border: 1px solid black; */

    & > .item {
        padding: 0px 8px 0px 8px;
        height: 56px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        /* border: 2px dotted purple; */

        & > .logo-image {
            box-sizing: border-box;
            height: 56px;
            /* width: 56px; */
            /* position: absolute;
            top: calc(50% - 56px/2);
            left: 8px; */
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
            /* position: relative; */
            /* top: calc(50% - 24px/2); */
            /* top: 16px; */
            /* left: 8px; */
            /* right: 8px; */
            /* right: 88px; */
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
            /* position: relative; */
            /* top: calc(50% - 24px/2); */
            /* top: 0px; */
            /* right: 40px; */
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
            /* position: relative; */
            /* top: 16px; */
            /* top: calc(50% - 24px/2); */
            right: 8px;
            display: flex;
            justify-content: center;
            align-items: center;
            /* border: 1px dotted blue; */
        }
    }

    & > .toggled {
        /* position: relative; */
        top: 56px;
    }
`

export default function ListItem(props) {
    const [isOpen, setIsOpen] = useState(false)
    const [toggleSelected, setToggleSelected] = useState('vendor')
    const { vendorData } = props
    const { logo, name, boothNumber } = vendorData
    let seeMoreDisplay = setSeeMoreDisplay(isOpen)

    function handleToggleClick(status, func) {
        if (status === 'vendor') {
            func('event')
        } else if (status === 'event') {
            func('vendor')
        }
    }

    function setInfo(info) {
        if (info === 'vendor') {
            const { userName, email, phone, streetAddress, aptSuite, city, state, zipcode } = vendorData
            const vendorDetailsArr = [userName, email, phone, streetAddress, aptSuite, city, state, zipcode]
            return vendorDetailsArr
        } else if (info === 'event') {
            const { powered, sponsorshipLevel, veteranOwned, nonProfit } = vendorData
            const eventDetailsArr = [powered, sponsorshipLevel, veteranOwned, nonProfit]
            return eventDetailsArr
        }
    }

    let info = setInfo(toggleSelected)

    function handleSeeMore(status, func) {
        if (status === false) {
            func(true)
        } else {
            func(false)
        }
    }

    function setSeeMoreDisplay(status) {
        if (status === false) {
            return `none`
        } else {
            return `block`
        }
    }
    
    return (
        <ItemContainer>
            <div className={'item'}>
                <img className={'logo-image'} src={logo} alt={'logo'} />
                <p className={'vendor-name'}>{name}</p>
                <p className={'booth-number'}>{boothNumber}</p>
                <img className={'more-icon'} src={cardClosedIcon} alt={'Click to see less.'} onClick={() => handleSeeMore(isOpen, setIsOpen)} />
            </div>
            <ListItemInfo className={'toggled'} display={seeMoreDisplay} vendorData={info} toggleClick={() => handleToggleClick(toggleSelected, setToggleSelected)} />
        </ItemContainer>
    )
}
